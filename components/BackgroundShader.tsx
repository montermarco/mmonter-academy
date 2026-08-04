"use client";

import { useEffect, useRef } from "react";

const VERTEX_SHADER_SOURCE = `
  attribute vec2 a_position;
  varying vec2 v_uv;
  void main() {
    v_uv = (a_position + 1.0) * 0.5;
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const FRAGMENT_SHADER_SOURCE = `
  precision highp float;

  uniform vec2 u_resolution;
  uniform vec2 u_mouse;
  uniform float u_time;

  varying vec2 v_uv;

  void main() {
    // Normalized coordinates (-1 to 1)
    vec2 st = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.x, u_resolution.y);
    vec2 mouse = (u_mouse - 0.5 * u_resolution.xy) / min(u_resolution.x, u_resolution.y);

    // Time speed for smooth animation
    float t = u_time * 0.45;

    // Mouse distance & cursor light flare
    float mouseDist = length(st - mouse);
    float mouseGlow = exp(-mouseDist * 4.0);

    // Distort coordinates with mouse influence
    st += (st - mouse) * mouseGlow * 0.20;

    // Dynamic sine wave plasma grid layers (Techy vector graph aesthetic)
    float wave1 = sin(st.x * 6.0 + t + sin(st.y * 4.0 + t * 0.5));
    float wave2 = cos(st.y * 7.0 - t * 0.8 + cos(st.x * 5.0 - t * 0.3));
    float wave3 = sin((st.x + st.y) * 8.0 + t * 1.2);

    float plasma = wave1 + wave2 + wave3;

    // Sharp glowing contour lines (representing LangGraph execution edges)
    float lines1 = smoothstep(0.08, 0.0, abs(sin(plasma * 3.1415 + t * 0.5)));
    float lines2 = smoothstep(0.04, 0.0, abs(cos(plasma * 6.2831 - t * 0.8))) * 0.6;

    // Dark Monochrome & Matrix Emerald Palette (NO purple, NO indigo, NO cyan)
    vec3 bgBase    = vec3(0.02, 0.02, 0.025); // Deep Black
    vec3 darkGrey  = vec3(0.18, 0.20, 0.24); // Tech Dark Grey
    vec3 emerald   = vec3(0.06, 0.85, 0.45); // Terminal Emerald Green (#10b981)
    vec3 deepGreen = vec3(0.02, 0.45, 0.22); // Deep Forest Green

    // Color interpolation driven by plasma waves (Dark Grey to Emerald Green)
    vec3 accentColor = mix(darkGrey, emerald, sin(plasma + t) * 0.5 + 0.5);
    accentColor = mix(accentColor, deepGreen, cos(st.x * 3.0 + t) * 0.5 + 0.5);

    // Composite final color
    vec3 color = bgBase;
    color += accentColor * lines1 * 0.65;
    color += darkGrey * lines2 * 0.40;

    // Dynamic mouse cursor glow pulse (Pure Emerald Green glow)
    color += emerald * mouseGlow * 0.45;

    // Subtle vignette
    float vignette = 1.0 - length(v_uv - 0.5) * 0.7;
    vignette = clamp(vignette, 0.0, 1.0);
    color *= vignette;

    gl_FragColor = vec4(color, 1.0);
  }
`;

export function BackgroundShader() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl =
      canvas.getContext("webgl") ||
      (canvas.getContext("experimental-webgl") as WebGLRenderingContext | null);

    if (!gl) {
      console.warn("WebGL not supported.");
      return;
    }

    const compileShader = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader compile error:", gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertShader = compileShader(gl.VERTEX_SHADER, VERTEX_SHADER_SOURCE);
    const fragShader = compileShader(gl.FRAGMENT_SHADER, FRAGMENT_SHADER_SOURCE);

    if (!vertShader || !fragShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program link error:", gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    // Quad
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const positions = new Float32Array([
      -1.0, -1.0,
       1.0, -1.0,
      -1.0,  1.0,
      -1.0,  1.0,
       1.0, -1.0,
       1.0,  1.0,
    ]);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const resolutionLocation = gl.getUniformLocation(program, "u_resolution");
    const mouseLocation = gl.getUniformLocation(program, "u_mouse");
    const timeLocation = gl.getUniformLocation(program, "u_time");

    let targetMouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let currentMouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouse.x = e.clientX;
      targetMouse.y = window.innerHeight - e.clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        targetMouse.x = e.touches[0].clientX;
        targetMouse.y = window.innerHeight - e.touches[0].clientY;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;

      if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        gl.viewport(0, 0, canvas.width, canvas.height);
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let animationFrameId: number;
    let startTime = performance.now();

    const render = (now: number) => {
      const time = (now - startTime) * 0.001;

      // Smooth mouse lerp
      currentMouse.x += (targetMouse.x - currentMouse.x) * 0.1;
      currentMouse.y += (targetMouse.y - currentMouse.y) * 0.1;

      gl.useProgram(program);
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
      gl.uniform2f(
        mouseLocation,
        currentMouse.x * (canvas.width / window.innerWidth),
        currentMouse.y * (canvas.height / window.innerHeight)
      );
      gl.uniform1f(timeLocation, time);

      gl.drawArrays(gl.TRIANGLES, 0, 6);

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", resizeCanvas);

      if (program) gl.deleteProgram(program);
      if (vertShader) gl.deleteShader(vertShader);
      if (fragShader) gl.deleteShader(fragShader);
      if (positionBuffer) gl.deleteBuffer(positionBuffer);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
      />
    </div>
  );
}

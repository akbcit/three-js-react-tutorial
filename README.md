This is a three.js tutorial setup

### Core

-   **WebGLRenderer**: Renders the scene using WebGL.
-   **Scene**: A container for all objects and lights in a 3D scene.
-   **Object3D**: The base class for all 3D objects.
-   **Group**: A container that groups multiple objects together.
-   **Raycaster**: Casts rays to detect intersections with objects in the scene.
-   **Layers**: Manages the visibility of objects on specific layers.
-   **Clock**: Keeps track of time in the scene.
-   **EventDispatcher**: A base class that adds event handling capabilities.

### Cameras

-   **Camera**: The base class for all cameras.
-   **PerspectiveCamera**: A camera with perspective projection, simulating human vision.
-   **OrthographicCamera**: A camera with orthographic projection, where objects maintain their size regardless of depth.
-   **CubeCamera**: Captures the scene from six different directions to create environment maps.
-   **ArrayCamera**: A container for an array of cameras to render multiple views simultaneously.
-   **StereoCamera**: A camera setup for rendering stereo 3D images.

### Geometry

-   **BufferGeometry**: A memory-efficient representation of geometry using buffers.
-   **InstancedBufferGeometry**: A geometry that allows efficient rendering of many instances of the same object.
-   **BoxGeometry**: A box-shaped geometry.
-   **CircleGeometry**: A circle-shaped geometry.
-   **ConeGeometry**: A cone-shaped geometry.
-   **CylinderGeometry**: A cylinder-shaped geometry.
-   **DodecahedronGeometry**: A dodecahedron-shaped geometry.
-   **EdgesGeometry**: Displays only the edges of a geometry.
-   **ExtrudeGeometry**: Creates 3D shapes by extruding a 2D shape along a path.
-   **IcosahedronGeometry**: An icosahedron-shaped geometry.
-   **LatheGeometry**: Creates shapes by rotating a profile shape around an axis.
-   **OctahedronGeometry**: An octahedron-shaped geometry.
-   **PlaneGeometry**: A flat, rectangular plane.
-   **PolyhedronGeometry**: A base class for platonic solids like dodecahedrons and icosahedrons.
-   **RingGeometry**: A ring or annulus-shaped geometry.
-   **ShapeGeometry**: A 3D shape generated from a 2D shape.
-   **SphereGeometry**: A sphere-shaped geometry.
-   **TetrahedronGeometry**: A tetrahedron-shaped geometry.
-   **TextGeometry**: A geometry for creating 3D text.
-   **TorusGeometry**: A torus (doughnut)-shaped geometry.
-   **TorusKnotGeometry**: A torus knot-shaped geometry.
-   **TubeGeometry**: A tube-shaped geometry extruded along a 3D path.
-   **WireframeGeometry**: A wireframe-only version of a geometry.
-   **ParametricGeometry**: A geometry generated by a parametric function.

### Materials

-   **Material**: The base class for materials, defining the appearance of objects.
-   **LineBasicMaterial**: A material for drawing simple, colored lines.
-   **LineDashedMaterial**: A material for drawing dashed lines.
-   **MeshBasicMaterial**: A material with no lighting effects, displaying flat colors or textures.
-   **MeshDepthMaterial**: A material that maps depth to grayscale.
-   **MeshLambertMaterial**: A material for non-shiny surfaces that reacts to light.
-   **MeshMatcapMaterial**: A material that uses a matcap texture for shading.
-   **MeshNormalMaterial**: A material that visualizes the normal vectors of a mesh.
-   **MeshPhongMaterial**: A shiny material with specular highlights.
-   **MeshPhysicalMaterial**: An advanced material with realistic physical properties.
-   **MeshStandardMaterial**: A physically-based material with roughness and metalness properties.
-   **MeshToonMaterial**: A cartoonish, cel-shaded material.
-   **PointsMaterial**: A material for rendering particles or points.
-   **RawShaderMaterial**: A material that allows writing custom shaders without any Three.js uniforms.
-   **ShaderMaterial**: A material that allows writing custom GLSL shaders.
-   **ShadowMaterial**: A material used to create shadows on a surface.
-   **SpriteMaterial**: A material for rendering 2D sprites that always face the camera.

### Meshes

-   **Mesh**: The base class for 3D objects made of geometry and material.
-   **Line**: A 3D line drawn between points.
-   **LineLoop**: A closed loop of lines connecting multiple points.
-   **LineSegments**: Multiple independent line segments.
-   **Points**: A collection of points (vertices) rendered as particles.
-   **SkinnedMesh**: A mesh with bones for skeletal animation.
-   **InstancedMesh**: A mesh that can efficiently render many instances of the same geometry.
-   **Sprite**: A 2D image that always faces the camera.

### Lights

-   **Light**: The base class for all lights.
-   **AmbientLight**: A light that globally illuminates all objects equally.
-   **DirectionalLight**: A light that shines in a specific direction, like sunlight.
-   **HemisphereLight**: A light that simulates the sky and ground lighting.
-   **PointLight**: A light that emits from a single point in all directions.
-   **SpotLight**: A light that emits from a point in a cone shape.
-   **RectAreaLight**: A rectangular light source with a uniform spread.
-   **AmbientLightProbe**: Captures ambient light from the scene for global illumination.
-   **HemisphereLightProbe**: Captures hemispheric light for global illumination.
-   **LightProbe**: An abstract class for light probes.

### Helpers

-   **AxesHelper**: Visualizes the X, Y, and Z axes in the scene.
-   **BoxHelper**: Visualizes the bounding box of an object.
-   **Box3Helper**: Visualizes a 3D bounding box.
-   **CameraHelper**: Visualizes the frustum of a camera.
-   **DirectionalLightHelper**: Visualizes a directional light source.
-   **GridHelper**: Displays a grid on the ground.
-   **PolarGridHelper**: Displays a circular grid.
-   **HemisphereLightHelper**: Visualizes a hemisphere light source.
-   **PlaneHelper**: Visualizes a plane in 3D space.
-   **PointLightHelper**: Visualizes a point light source.
-   **SkeletonHelper**: Visualizes the bones of a skinned mesh.
-   **SpotLightHelper**: Visualizes a spot light source.
-   **ArrowHelper**: Visualizes a directional arrow.
-   **PositionalAudioHelper**: Visualizes positional audio in the scene.

### Objects

-   **Bone**: Represents a bone in a skeletal system.
-   **LensFlare**: Adds lens flare effects to a scene.
-   **ImmediateRenderObject**: A base class for objects rendered immediately without buffering.
-   **LOD**: Level of Detail object that switches between different meshes based on distance from the camera.
-   **LineSegments**: Renders multiple disconnected line segments.
-   **LineLoop**: Renders a closed loop of lines.
-   **Mesh**: The base class for objects with geometry and material.
-   **Points**: Renders points in space as particles.
-   **Skeleton**: Manages bones for skeletal animation.
-   **SkinnedMesh**: A mesh that supports skeletal animation.
-   **Sprite**: A 2D image that always faces the camera.
-   **Group**: A container for grouping multiple objects together.
-   **InstancedMesh**: Efficiently renders many instances of the same geometry.

### Animation

-   **AnimationMixer**: Manages animations for an object.
-   **AnimationClip**: A reusable animation stored as keyframes.
-   **AnimationAction**: Represents an animation being played on an object.
-   **KeyframeTrack**: Stores keyframes for a specific property of an object.
-   **BooleanKeyframeTrack**: A keyframe track for boolean values.
-   **ColorKeyframeTrack**: A keyframe track for color values.
-   **NumberKeyframeTrack**: A keyframe track for numerical values.
-   **QuaternionKeyframeTrack**: A keyframe track for quaternion (rotation) values.
-   **StringKeyframeTrack**: A keyframe track for string values.
-   **VectorKeyframeTrack**: A keyframe track for vector (position) values.
-   **PropertyBinding**: Binds an animation track to a property of an object.
-   **PropertyMixer**: Mixes property values for smooth animation transitions.

### Textures

-   **Texture**: The base class for textures applied to surfaces.
-   **CanvasTexture**: A texture created from a canvas element.
-   **CompressedTexture**: A texture using compressed data formats.
-   **CubeTexture**: A texture for cube maps used in environment mapping.
-   **DataTexture**: A texture created from raw data.
-   **DataTexture2DArray**: A 2D array texture.
-   **DataTexture3D**: A 3D texture for volumetric data.
-   **DepthTexture**: A texture representing depth information.
-   **VideoTexture**: A texture created from a video element.
-   **FramebufferTexture**: A texture used as a rendering target for offscreen rendering.

### Loaders

-   **AnimationLoader**: Loads animation clips.
-   **AudioLoader**: Loads audio files.
-   **BufferGeometryLoader**: Loads BufferGeometry data.
-   **CompressedTextureLoader**: Loads compressed textures.
-   **CubeTextureLoader**: Loads cube textures for environment mapping.
-   **DataTextureLoader**: Loads textures from raw data.
-   **FileLoader**: Loads arbitrary files.
-   **FontLoader**: Loads font data for creating text geometries.
-   **ImageBitmapLoader**: Loads ImageBitmap objects for textures.
-   **ImageLoader**: Loads images for use as textures.
-   **JSONLoader**: Loads JSON-formatted geometries and materials.
-   **Loader**: The base class for all loaders.
-   **LoaderUtils**: Utility functions for loaders.
-   **MaterialLoader**: Loads materials from JSON data.
-   **ObjectLoader**: Loads entire scenes or objects from JSON data.
-   **TextureLoader**: Loads textures from images.
-   **GLTFLoader**: Loads models in the GLTF format.
-   **OBJLoader**: Loads models in the OBJ format.
-   **FBXLoader**: Loads models in the FBX format.
-   **SVGLoader**: Loads SVG paths as shapes.
-   **PLYLoader**: Loads models in the PLY format.
-   **STLLoader**: Loads models in the STL format.
-   **DRACOLoader**: Decompresses and loads Draco-compressed meshes.
-   **3MFLoader**: Loads models in the 3MF format.
-   **EXRLoader**: Loads high dynamic range EXR images.
-   **KMZLoader**: Loads KMZ files (compressed COLLADA).
-   **LDrawLoader**: Loads LDraw model files.
-   **MD2Loader**: Loads animated models in the MD2 format.
-   **MMDLoader**: Loads MikuMikuDance models and animations.
-   **PCDLoader**: Loads point cloud data in PCD format.
-   **PDBLoader**: Loads molecular models in the PDB format.
-   **PRWMLoader**: Loads models in the PRWM format.
-   **SEA3DLoader**: Loads models in the SEA3D format.
-   **TGALoader**: Loads images in the TGA format.
-   **TTFLoader**: Loads TrueType font files.

### Audio

-   **Audio**: The base class for audio objects in the scene.
-   **AudioAnalyser**: Provides frequency data for visualizing audio.
-   **AudioListener**: Represents the listener's position in the scene.
-   **PositionalAudio**: Audio that plays from a specific position in 3D space.
-   **AudioLoader**: Loads audio files for use in the scene.

### Animation

-   **AnimationMixer**: Manages animations and transitions for an object.
-   **AnimationClip**: A collection of keyframes representing an animation.
-   **AnimationAction**: Controls playback of an animation on an object.
-   **KeyframeTrack**: Stores keyframes for a property over time.
-   **PropertyBinding**: Associates keyframe tracks with object properties.
-   **PropertyMixer**: Interpolates between property values during animation.
-   **BooleanKeyframeTrack**: Stores keyframes for boolean properties.
-   **ColorKeyframeTrack**: Stores keyframes for color properties.
-   **NumberKeyframeTrack**: Stores keyframes for numerical properties.
-   **QuaternionKeyframeTrack**: Stores keyframes for quaternion rotations.
-   **StringKeyframeTrack**: Stores keyframes for string properties.
-   **VectorKeyframeTrack**: Stores keyframes for vector properties.

### Math

-   **Box2**: Represents a 2D bounding box.
-   **Box3**: Represents a 3D bounding box.
-   **Color**: Represents an RGB color.
-   **Cylindrical**: Represents a cylindrical coordinate.
-   **Euler**: Represents rotation using Euler angles.
-   **Frustum**: Represents a frustum, typically used for view frustum culling.
-   **Interpolant**: Base class for interpolating between keyframes.
-   **Line3**: Represents a line segment in 3D space.
-   **Math**: A collection of mathematical utilities.
-   **Matrix3**: Represents a 3x3 matrix.
-   **Matrix4**: Represents a 4x4 matrix.
-   **Plane**: Represents a plane in 3D space.
-   **Quaternion**: Represents a quaternion, often used for rotation.
-   **Ray**: Represents a ray in 3D space.
-   **Sphere**: Represents a sphere in 3D space.
-   **SplineCurve**: Represents a spline curve.
-   **Triangle**: Represents a triangle in 3D space.
-   **Vector2**: Represents a 2D vector.
-   **Vector3**: Represents a 3D vector.
-   **Vector4**: Represents a 4D vector.

### Objects for Rendering

-   **WebGLRenderer**: Renders scenes using WebGL.
-   **WebGL1Renderer**: A WebGL renderer compatible with WebGL 1.0.
-   **WebGLRenderTarget**: Renders the scene to a texture instead of the screen.
-   **WebGLMultisampleRenderTarget**: A render target with multisampling for anti-aliasing.
-   **WebGLRenderTargetCube**: A render target for cube maps.
-   **RenderPass**: A pass for rendering the scene normally.
-   **ShaderPass**: A pass that applies a shader to the scene.
-   **EffectComposer**: Manages multiple post-processing passes.
-   **CubeCamera**: Captures the scene from six directions for environment mapping.
-   **WebGLCubeRenderTarget**: A render target for cube textures.
-   **WebGLShadowMap**: Manages shadow maps for shadow casting lights.
-   **WebGLBufferRenderer**: Renders buffer geometry using WebGL.
-   **WebGLIndexedBufferRenderer**: Renders indexed buffer geometry using WebGL.

### Constants and Utilities

-   **REVISION**: The version number of Three.js.
-   **CullFaceNone**: Disables face culling.
-   **CullFaceBack**: Culls back-facing polygons.
-   **CullFaceFront**: Culls front-facing polygons.
-   **CullFaceFrontBack**: Culls both front and back-facing polygons.
-   **FrontFaceDirectionCW**: Clockwise winding order for front faces.
-   **FrontFaceDirectionCCW**: Counterclockwise winding order for front faces.
-   **BasicShadowMap**: A basic shadow mapping algorithm.
-   **PCFShadowMap**: Percentage-closer filtering shadow map.
-   **PCFSoftShadowMap**: A softer version of PCF shadow maps.
-   **VSMShadowMap**: Variance shadow map.
-   **RGBFormat**: RGB color format.
-   **RGBAFormat**: RGBA color format.
-   **LuminanceFormat**: Luminance-only format.
-   **LuminanceAlphaFormat**: Luminance and alpha format.
-   **RGBEFormat**: RGBE (Radiance HDR) format.
-   **DepthFormat**: Depth texture format.
-   **DepthStencilFormat**: Depth and stencil format.
-   **AlphaFormat**: Alpha channel only format.
-   **RedFormat**: Red channel only format.
-   **RGFormat**: Red and green channel format.
-   **RGIntegerFormat**: Integer format for red and green channels.
-   **RGBIntegerFormat**: Integer format for RGB channels.
-   **RGBAIntegerFormat**: Integer format for RGBA channels.
-   **MinEquation**: Minimum blending equation.
-   **MaxEquation**: Maximum blending equation.
-   **AddEquation**: Adds source and destination colors.
-   **SubtractEquation**: Subtracts destination color from source color.
-   **ReverseSubtractEquation**: Subtracts source color from destination color.
-   **BlendEquation**: Specifies the blending equation.
-   **BlendEquationAlpha**: Specifies the blending equation for the alpha channel.
-   **ZeroFactor**: Zero blending factor.
-   **OneFactor**: One blending factor.
-   **SrcColorFactor**: Uses the source color as the blending factor.
-   **OneMinusSrcColorFactor**: Uses one minus the source color as the blending factor.
-   **SrcAlphaFactor**: Uses the source alpha as the blending factor.
-   **OneMinusSrcAlphaFactor**: Uses one minus the source alpha as the blending factor.
-   **DstAlphaFactor**: Uses the destination alpha as the blending factor.
-   **OneMinusDstAlphaFactor**: Uses one minus the destination alpha as the blending factor.
-   **DstColorFactor**: Uses the destination color as the blending factor.
-   **OneMinusDstColorFactor**: Uses one minus the destination color as the blending factor.
-   **SrcAlphaSaturateFactor**: Uses the source alpha saturation as the blending factor.
-   **NeverDepth**: Depth test always fails.
-   **AlwaysDepth**: Depth test always passes.
-   **LessDepth**: Passes if the incoming depth is less than the stored depth.
-   **LessEqualDepth**: Passes if the incoming depth is less than or equal to the stored depth.
-   **EqualDepth**: Passes if the incoming depth is equal to the stored depth.
-   **GreaterEqualDepth**: Passes if the incoming depth is greater than or equal to the stored depth.
-   **GreaterDepth**: Passes if the incoming depth is greater than the stored depth.
-   **NotEqualDepth**: Passes if the incoming depth is not equal to the stored depth.
-   **MultiplyOperation**: Multiplies colors.
-   **MixOperation**: Linearly interpolates between colors.
-   **AddOperation**: Adds colors.
-   **NoToneMapping**: Disables tone mapping.
-   **LinearToneMapping**: Applies linear tone mapping.
-   **ReinhardToneMapping**: Applies Reinhard tone mapping.
-   **Uncharted2ToneMapping**: Applies Uncharted 2 filmic tone mapping.
-   **CineonToneMapping**: Applies Cineon tone mapping.
-   **ACESFilmicToneMapping**: Applies ACES filmic tone mapping.
-   **CustomToneMapping**: Allows custom tone mapping functions.

### Post-Processing

-   **EffectComposer**: Manages and applies multiple post-processing effects.
-   **ShaderPass**: Applies a custom shader as a post-processing effect.
-   **RenderPass**: Renders the scene as part of the post-processing chain.
-   **UnrealBloomPass**: Applies a bloom effect to bright areas of the scene.
-   **FilmPass**: Simulates film grain and scanlines.
-   **GlitchPass**: Applies a glitch effect to the scene.
-   **DotScreenPass**: Applies a dot screen effect, similar to a comic book style.
-   **SMAAPass**: Applies Subpixel Morphological Anti-Aliasing (SMAA) to smooth edges.
-   **BokehPass**: Applies a bokeh depth-of-field effect to the scene.
-   **SAOPass**: Applies Screen-Space Ambient Occlusion (SSAO) to enhance shadows.
-   **SSAOPass**: Applies SSAO to enhance depth perception.

### Shaders

-   **ShaderLib**: A library of predefined shaders.
-   **UniformsLib**: A library of predefined uniforms for shaders.
-   **UniformsUtils**: Utilities for working with shader uniforms.
-   **ShaderChunk**: Reusable shader code chunks.
-   **ShaderMaterial**: Allows custom shaders to be used as materials.
-   **RawShaderMaterial**: A barebones shader material with no automatic uniform setup.
-   **MeshShaderMaterial**: A shader material specifically for mesh objects.

### Textures and Environment

-   **DataTextureLoader**: Loads textures from raw data files.
-   **CubeTextureLoader**: Loads cube textures for environment mapping.
-   **CompressedTextureLoader**: Loads compressed textures for performance optimization.
-   **TextureLoader**: Loads image textures for materials.
-   **PMREMGenerator**: Pre-computes environment maps for accurate reflections and lighting.
-   **EquirectangularToCubeGenerator**: Converts equirectangular images to cube maps.
-   **RGBELoader**: Loads HDR textures in RGBE format.

### Morph Targets

-   **MorphBlendMesh**: A mesh that blends between different morph targets.
-   **MorphAnimMesh**: A mesh that animates between morph targets.

### Fog and Environment

-   **Fog**: Adds linear fog to the scene.
-   **FogExp2**: Adds exponential fog to the scene.
-   **Scene.environment**: Sets an environment map for the entire scene.

### Advanced

-   **ImmediateRenderObject**: Renders objects immediately, bypassing buffering.
-   **InstancedBufferAttribute**: An attribute for instanced rendering with buffers.
-   **InstancedBufferGeometry**: A geometry for efficient rendering of multiple instances.
-   **InstancedMesh**: Efficiently renders many instances of the same geometry.
-   **WebGLMultisampleRenderTarget**: A render target with multisampling for anti-aliasing.
-   **WebGLRenderTarget**: Renders the scene to a texture instead of directly to the screen.
-   **WebGLRenderTargetCube**: A render target for cube textures.
-   **WebGLRenderer**: The main renderer for Three.js using WebGL.
-   **WebGLCubeRenderTarget**: A render target for cube maps, often used for reflections.
-   **WebGLShadowMap**: Manages shadow maps for shadow casting lights.
-   **WebGLBufferRenderer**: Renders buffer geometry using WebGL.
-   **WebGLIndexedBufferRenderer**: Renders indexed buffer geometry using WebGL.

### Custom Effects and Custom Renderers

-   **Lensflare**: Adds lens flare effects to the scene.
-   **ShaderPass**: A pass that applies a shader as a post-processing effect.
-   **FilmPass**: Simulates film grain and scanlines.
-   **EffectComposer**: Manages and applies multiple post-processing effects.
-   **UnrealBloomPass**: Applies a bloom effect to bright areas of the scene.
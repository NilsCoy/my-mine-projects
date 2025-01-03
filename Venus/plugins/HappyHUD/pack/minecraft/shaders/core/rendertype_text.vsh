#version 110

#moj_import <fog.glsl>
#moj_import <light.glsl>

in vec3 Position;
in vec4 Color;
in vec2 UV0;
in ivec2 UV2;

uniform sampler2D Sampler0;

uniform mat4 ModelViewMat;
uniform mat4 ProjMat;
uniform mat3 IViewRotMat;
uniform int FogShape;
uniform vec2 ScreenSize;

out float vertexDistance;
out vec4 vertexColor;
out vec2 texCoord0;

#define ACTIONBAR_OFFSET 64

// Function to convert a vertical ascent into a ID.
float get_id(float offset) {
    if (offset <= 0)
        return 0;
    return trunc(offset/1000);
}


void main() {
    vec3 pos = Position;

    vertexDistance = fog_distance(ModelViewMat, IViewRotMat * Position, FogShape);
    vertexColor = Color;
    texCoord0 = UV0;

    vec2 pixel = vec2(ProjMat[0][0], ProjMat[1][1]) / 2.0;
    int guiScale = int(round(pixel.x / (1 / ScreenSize.x)));
    vec2 guiSize = ScreenSize / guiScale;

    float id = get_id((round(guiSize.y - Position.y + ACTIONBAR_OFFSET)) * -1);
    
    // Detect if GUI text.
    if (id > 99 && Color.a != 0.0) {
        float yOffset = 0;
        float xOffset = 0;
        int layer = 0;
        bool outlined = false;

        switch (int(id)) {
%POSITIONS%
        }

        if (%OUTLINE_CONDITION%) {
            pos.y -= (id*1000) + 500 - ACTIONBAR_OFFSET;
            pos.x -= (guiSize.x * 0.5);
            pos -= vec3(xOffset, yOffset, 0.0);
            pos.z += layer;
        }
    } 	

    gl_Position = ProjMat * ModelViewMat * vec4(pos, 1);
}

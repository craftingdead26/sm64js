import * as Gbi from "../../../../../include/gbi"
import {
	cave_09001000,
	cave_09003000
} from "../../../../../textures/cave"
const hmc_seg7_vertex_0701E958 = [
	{ pos: [ -1391, -4587, 6251 ], flag: 0, tc: [ 6156, 1102 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -1822, -4484, 5893 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -1749, -4587, 5893 ], flag: 0, tc: [ 536, 1102 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -1779, 1843, -6545 ], flag: 0, tc: [ 16358, 10186 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -1779, 2867, -6545 ], flag: 0, tc: [ 16358, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2830, 2867, -7807 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2830, 1843, -7807 ], flag: 0, tc: [ 0, 10186 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -1209, -4484, 5281 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -851, -4587, 5712 ], flag: 0, tc: [ 6156, 1102 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -1209, -4587, 5353 ], flag: 0, tc: [ 536, 1102 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -815, -4484, 5676 ], flag: 0, tc: [ 6156, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -1749, -4587, 5893 ], flag: 0, tc: [ 9000, 1102 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -1822, -4484, 5893 ], flag: 0, tc: [ 9568, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -4290, -511, -5769 ], flag: 0, tc: [ 7158, 1028 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -4290, -511, -7285 ], flag: 0, tc: [ 0, 1028 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -4290, -204, -7285 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
]

const hmc_seg7_vertex_0701EA58 = [
	{ pos: [ -1391, -4587, 6251 ], flag: 0, tc: [ 6156, 1102 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -1427, -4484, 6288 ], flag: 0, tc: [ 6156, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -1822, -4484, 5893 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -1209, -4484, 5281 ], flag: 0, tc: [ 3034, 4518 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -1822, -4484, 5893 ], flag: 0, tc: [ 3034, -4120 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -1427, -4484, 6288 ], flag: 0, tc: [ -2534, -4120 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -815, -4484, 5676 ], flag: 0, tc: [ -2534, 4518 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2774, -511, -5769 ], flag: 0, tc: [ 7158, 1028 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -4290, -511, -5769 ], flag: 0, tc: [ 0, 1028 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -4290, -204, -5769 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2774, -204, -5769 ], flag: 0, tc: [ 7158, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -4290, -511, -5769 ], flag: 0, tc: [ 7158, 1028 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -4290, -204, -7285 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -4290, -204, -5769 ], flag: 0, tc: [ 7158, 0 ], color: [ 255, 255, 255, 255 ] },
]

const hmc_seg7_vertex_0701EB38 = [
	{ pos: [ -2774, 819, -7285 ], flag: 0, tc: [ 7158, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -4290, 512, -7285 ], flag: 0, tc: [ 0, 1028 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2774, 512, -7285 ], flag: 0, tc: [ 7158, 1028 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2774, -204, -7285 ], flag: 0, tc: [ 7158, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -4290, -204, -7285 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -4290, -511, -7285 ], flag: 0, tc: [ 0, 1028 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2774, -511, -7285 ], flag: 0, tc: [ 7158, 1028 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2774, -204, -5769 ], flag: 0, tc: [ 7158, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2774, -511, -7285 ], flag: 0, tc: [ 0, 1028 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2774, -511, -5769 ], flag: 0, tc: [ 7158, 1028 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2774, -204, -7285 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2774, 819, -5769 ], flag: 0, tc: [ 7158, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2774, 512, -7285 ], flag: 0, tc: [ 0, 1028 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2774, 512, -5769 ], flag: 0, tc: [ 7158, 1028 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2774, 819, -7285 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
]

const hmc_seg7_vertex_0701EC28 = [
	{ pos: [ -2774, 1434, -5769 ], flag: 0, tc: [ 7158, 1028 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -4290, 1741, -5769 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2774, 1741, -5769 ], flag: 0, tc: [ 7158, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2774, 819, -7285 ], flag: 0, tc: [ 7158, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -4290, 819, -7285 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -4290, 512, -7285 ], flag: 0, tc: [ 0, 1028 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -4290, 512, -5769 ], flag: 0, tc: [ 7158, 1028 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -4290, 819, -5769 ], flag: 0, tc: [ 7158, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2774, 512, -5769 ], flag: 0, tc: [ 7158, 1028 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -4290, 512, -5769 ], flag: 0, tc: [ 0, 1028 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -4290, 819, -5769 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2774, 819, -5769 ], flag: 0, tc: [ 7158, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -4290, 1434, -5769 ], flag: 0, tc: [ 0, 1028 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -4290, 1434, -5769 ], flag: 0, tc: [ 7158, 1028 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -4290, 1741, -7285 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -4290, 1741, -5769 ], flag: 0, tc: [ 7158, 0 ], color: [ 255, 255, 255, 255 ] },
]

const hmc_seg7_vertex_0701ED28 = [
	{ pos: [ -4290, 1434, -5769 ], flag: 0, tc: [ 7158, 1028 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -4290, 1434, -7285 ], flag: 0, tc: [ 0, 1028 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -4290, 1741, -7285 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2774, 1741, -7285 ], flag: 0, tc: [ 7158, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2774, 1434, -7285 ], flag: 0, tc: [ 7158, 1028 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2774, 1741, -5769 ], flag: 0, tc: [ 7158, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2774, 1434, -7285 ], flag: 0, tc: [ 0, 1028 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2774, 1434, -5769 ], flag: 0, tc: [ 7158, 1028 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2774, 1741, -7285 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
]

const hmc_seg7_vertex_0701EDB8 = [
	{ pos: [ -4477, -4587, 3950 ], flag: 0, tc: [ 26110, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -4367, -4279, 3245 ], flag: 0, tc: [ 23224, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -4477, -4587, 3167 ], flag: 0, tc: [ 23074, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -4367, -4279, 3872 ], flag: 0, tc: [ 25992, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -3845, -4279, 2723 ], flag: 0, tc: [ 19852, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -3923, -4587, 2613 ], flag: 0, tc: [ 19976, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -3219, -4279, 2723 ], flag: 0, tc: [ 16964, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -3140, -4587, 2613 ], flag: 0, tc: [ 16826, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2587, -4587, 3167 ], flag: 0, tc: [ 13682, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2696, -4279, 3245 ], flag: 0, tc: [ 13534, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2587, -4587, 3950 ], flag: 0, tc: [ 10586, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2696, -4279, 3872 ], flag: 0, tc: [ 10702, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -3219, -4279, 4394 ], flag: 0, tc: [ 7418, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -3140, -4587, 4503 ], flag: 0, tc: [ 7558, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -3845, -4279, 4394 ], flag: 0, tc: [ 4700, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -3923, -4587, 4503 ], flag: 0, tc: [ 4570, 990 ], color: [ 255, 255, 255, 255 ] },
]

const hmc_seg7_vertex_0701EEB8 = [
	{ pos: [ -4367, -4279, 3872 ], flag: 0, tc: [ 1464, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -3923, -4587, 4503 ], flag: 0, tc: [ 4570, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -3845, -4279, 4394 ], flag: 0, tc: [ 4700, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -4477, -4587, 3950 ], flag: 0, tc: [ 1582, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -819, -4279, 5665 ], flag: 0, tc: [ -3606, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 563, -4279, 5596 ], flag: 0, tc: [ -13860, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 563, -4535, 5596 ], flag: 0, tc: [ -13860, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -819, -4535, 5665 ], flag: 0, tc: [ -3606, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -1437, -4279, 6283 ], flag: 0, tc: [ 5110, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -1437, -4535, 6283 ], flag: 0, tc: [ 5110, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -1494, -4279, 7654 ], flag: 0, tc: [ 15190, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -1494, -4535, 7654 ], flag: 0, tc: [ 15190, 990 ], color: [ 255, 255, 255, 255 ] },
]

export const hmc_seg7_dl_0701EF78 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, cave_09001000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(hmc_seg7_vertex_0701E958, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7, 10,  8, 0x0, 11, 12,  9, 0x0),
	...Gbi.gsSP2Triangles(12,  7,  9, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(hmc_seg7_vertex_0701EA58, 14, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSPVertex(hmc_seg7_vertex_0701EB38, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 14, 12, 0x0),
	Gbi.gsSPVertex(hmc_seg7_vertex_0701EC28, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  4,  7, 0x0,  6,  5,  4, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  8, 10, 11, 0x0),
	...Gbi.gsSP2Triangles( 0, 12,  1, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(hmc_seg7_vertex_0701ED28, 9, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  1,  4, 0x0),
	...Gbi.gsSP2Triangles( 3,  2,  1, 0x0,  5,  6,  7, 0x0),
	Gbi.gsSP1Triangle( 5,  8,  6, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const hmc_seg7_dl_0701F0D0 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, cave_09003000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(hmc_seg7_vertex_0701EDB8, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 2,  1,  4, 0x0,  2,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 5,  4,  6, 0x0,  5,  6,  7, 0x0),
	...Gbi.gsSP2Triangles( 7,  6,  8, 0x0,  6,  9,  8, 0x0),
	...Gbi.gsSP2Triangles( 9, 10,  8, 0x0,  9, 11, 10, 0x0),
	...Gbi.gsSP2Triangles(12, 13, 11, 0x0, 13, 10, 11, 0x0),
	...Gbi.gsSP2Triangles(13, 14, 15, 0x0, 13, 12, 14, 0x0),
	Gbi.gsSPVertex(hmc_seg7_vertex_0701EEB8, 12, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
	...Gbi.gsSP2Triangles( 7,  8,  4, 0x0,  7,  9,  8, 0x0),
	...Gbi.gsSP2Triangles( 9, 10,  8, 0x0,  9, 11, 10, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const hmc_seg7_dl_0701F1B0 = [
	Gbi.gsDPSetCycleType(Gbi.G_CYC_2CYCLE),
	Gbi.gsDPSetRenderMode(Gbi.G_RM_FOG_SHADE_A_AA_ZB_TEX_EDGE2),
	Gbi.gsDPSetFogColor(0, 0, 0, 255),
	Gbi.gsSPFogPosition(960, 1000),
	Gbi.gsSPSetGeometryMode(Gbi.G_FOG),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_DECALRGBA),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(hmc_seg7_dl_0701EF78),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(hmc_seg7_dl_0701F0D0),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCycleType(Gbi.G_CYC_1CYCLE),
	Gbi.gsDPSetRenderMode(Gbi.G_RM_AA_ZB_TEX_EDGE_NOOP2),
	Gbi.gsSPClearGeometryMode(Gbi.G_FOG),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsSPEndDisplayList(),
]

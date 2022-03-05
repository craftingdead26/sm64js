// Bitfs

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_OPAQUE
} from "../../../../../engine/GeoLayout"

import { bitfs_seg7_dl_0700BED8 } from "./model.inc"

// 0x0E000600
export const bitfs_geo_000600 = () => {return [
    GEO_CULLING_RADIUS(2800),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bitfs_seg7_dl_0700BED8),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-07-09 10:07:11 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
import ins from "./request";

export async function getBanners() {
    return await ins.get("/api/banner");
}


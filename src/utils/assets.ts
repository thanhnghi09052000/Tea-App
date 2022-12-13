const getUrl = (path:string): string => {
    let finalPath = `images/${path}`
    return finalPath
}

export const getLogoAsset = (): string => {
    return getUrl('/logo/logo.jpg')
}

export const getTwinningAsset = (asset:string): string => {
    return getUrl('/twinnings/' + asset)
}

export const getSeasoningAsset = (asset:string): string => {
    return getUrl('/seasonings/' + asset)
}

export const getBiglowAsset = (asset:string): string => {
    return getUrl('/bigelow/' + asset)
}

export const getSleepyTime = (asset:string): string => {
    return getUrl('/sleepytime/' + asset)
}

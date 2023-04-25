export const extractFileNameFromPath = (path: string) => path.split('/').at(-1).split('.')[0]

export const extractFileNameFromGlobImport = (demos: string[]) => {
    const names = [] as string[]
    for (const path in demos) names.push(extractFileNameFromPath(path))
    return names
}
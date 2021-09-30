export function getClassNames(classNameMap) {
    return Object.keys(classNameMap)
        .filter((className) => classNameMap[className])
        .join(' ');
}

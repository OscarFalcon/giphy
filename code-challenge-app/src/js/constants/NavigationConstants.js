export const NAVIGATION_SEARCH         = "NAVIGATION_SEARCH"
export const NAVIGATION_FAVORITES      = "NAVIGATION_FAVORITES"
export const NAVIGATION_HASHTAG        = "NAVIGATION_HASHTAG";

export const valueToNavigation =  value => (
    value === 0 ? NAVIGATION_SEARCH : NAVIGATION_FAVORITES
)

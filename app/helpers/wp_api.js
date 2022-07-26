const NAME = "thecocktaildb",
    DOMAIN = `https://www.${NAME}.com`,
    API = `${DOMAIN}/api/json/v1/1`,
    RANDOM_DRINK = `${API}/random.php`,
    SEARCH = `${API}/search.php?`,
    BY_NAME = `${SEARCH}s=`,
    BY_LETTER = `${SEARCH}f=`,
    BY_INGREDIENT = `${SEARCH}i=`,
    FILTER = `${API}/filter.php?`,
    FILTER_ALCOHOL = `${FILTER}a=Alcoholic`,
    FILTER_NO_ALCOHOL = `${FILTER}a=Non_Alcoholic`;



export default {
    NAME,
    DOMAIN,
    API,
    RANDOM_DRINK,
    SEARCH,
    BY_NAME,
    BY_LETTER,
    BY_INGREDIENT,
    FILTER,
    FILTER_ALCOHOL,
    FILTER_NO_ALCOHOL
}
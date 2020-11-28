class Meal {
    constructor(
        id, 
        categoryIds,
        title, 
        affordability, 
        complexity, 
        imageUrl, 
        duration, 
        incredients, 
        steps, 
        isGlutenFree, 
        isVegan, 
        isLactoseFree
    ) {
        this.id = id,
        this.categoryIds = categoryIds,
        this.title = title,
        this.imageUrl = imageUrl,
        this.incredients = incredients,
        this.steps = steps,
        this.duration = duration,
        this.complexity = complexity,
        this.isGlutenFree = isGlutenFree,
        this.isVegan = isVegan,
        this.isLactoseFree = isLactoseFree
    }
}

export default Meal;
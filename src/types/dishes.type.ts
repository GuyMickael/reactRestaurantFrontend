export default interface IDishes {
    name: string;
    available: boolean;
    description: string;
    createdAt: Date;
    price: number;
    image: string;
    category: string;
    ingredients: string[];
    allergens: string[];
    isAvailable: boolean;
    isVegan: boolean;
    isVegetarian: boolean;
    isGlutenFree: boolean;
    isSpicy: boolean;
}
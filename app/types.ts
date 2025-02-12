export interface Trait {
  id: string;
  name: string;
  category: string;
}

export interface Choice {
  id: string;
  text: string;
  personality: string[];
}

export interface Question {
  id: number;
  text: string;
  choices: Choice[];
}

export interface ShopLink {
  name: string;
  url: string;
}

export interface PersonalityWeight {
  trait: string;
  weight: number;
}

export interface Gift {
  id: string;
  name: string;
  description: string;
  price: {
    min: number;
    max: number;
  };
  matchingPersonalities: PersonalityWeight[];
  imageUrl: string;
  category: string;
  rating: number;
  shopLinks: ShopLink[];
  giftTags: string[];
  occasions: string[];
}

export interface GiftCategory {
  id: string;
  name: string;
}

export interface UserAnswers {
  questionId: number;
  choiceId: string;
  personalities: string[];
}

export interface BudgetRange {
  id: string;
  label: string;
  range: {
    min: number;
    max: number;
  };
}

export interface UserPreference {
  budget: BudgetRange;
  personalities: string[];
} 
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
  weight: number;  // 0-1 คะแนนความสำคัญของ trait นี้
}

export interface Gift {
  id: string;
  name: string;
  description: string;
  price: {
    min: number;
    max: number;
  };
  matchingPersonalities: PersonalityWeight[];  // เปลี่ยนจาก string[] เป็น PersonalityWeight[]
  imageUrl: string;
  category: string;
  rating: number;
  shopLinks: ShopLink[];
  giftTags: string[];  // เพิ่ม tags สำหรับการจับคู่เพิ่มเติม
  occasions: string[];  // เพิ่มโอกาสที่เหมาะสม
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
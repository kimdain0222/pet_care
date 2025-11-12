import {
  careRoutineTemplates,
  healthRiskByBreed,
  productRecommendations
} from '../models/mockData.js';
import { CareRoutineItem, HealthRisk, PetProfile, ProductRecommendation } from '../types/pet.js';

export interface DashboardSummary {
  profile: PetProfile;
  healthRisks: HealthRisk[];
  careRoutine: CareRoutineItem[];
  products: ProductRecommendation[];
}

export const dashboardService = {
  buildSummary(profile: PetProfile): DashboardSummary {
    const healthRisks = healthRiskByBreed[profile.breed] ?? [];
    const careRoutine = careRoutineTemplates;
    const products = productRecommendations;

    return {
      profile,
      healthRisks,
      careRoutine,
      products
    };
  }
};

import { PetProfile } from '../types/pet.js';

const onboardedPets: PetProfile[] = [];

export const onboardingService = {
  saveProfile(profile: PetProfile) {
    onboardedPets.push(profile);
    return profile;
  },
  listProfiles() {
    return onboardedPets;
  }
};

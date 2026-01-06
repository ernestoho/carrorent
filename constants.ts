
import { Car, User, Review, BookingRequest } from './types';

export const MOCK_USERS: Record<string, User> = {
  'sarah': {
    id: 'sarah',
    name: 'Sarah J.',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAuJyy5Qr7GknQF53jk40ObkuFC66f5LYPZ5YGW4SjuDeA4nQ77uTUPBmpCbAtnQwUsmGmqL67tqcHZudFbi-Ey_Qo9T4oCcQCrz1tYWnMjxs7HZz8FP7G98nf3yU76A6DYCdA9cdJP_RSmqOse5h2Mb09CinBZrSCAQKj-b4oEF-6E436FqtJ7PEaQ-BlXsl_7YyjSh31y6torTqAIaYq8QrLK0RAAy6rDALUzjCfSw3ZxD3pDsfmCkA7t7_7jST5YzUfTA_hY096r',
    role: 'owner',
    isSuperhost: true,
    memberSince: '2021',
    location: 'San Francisco, CA',
    rating: 4.98,
    trips: 120,
    responseRate: '100%'
  },
  'alex': {
    id: 'alex',
    name: 'Alex Driver',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIVNrMIrE2iiVb2hvHRr60KtekjGU0MezTcrRRCVlKGMC0VfElWQpbj4KQTwIT3m8F1GxB5h5XfmD_MC-lZcrtllKsaaPJuv2JZu7V6xLIeQAPw0pxWKA4paZ1hs6amFe0-DshPt1oCrqBu9l41EK-5AUoj06JXNZoPf2NrfmWPOCqsoNpLTlktxCcNruBXyyy-QtbkHIg7ESC_VVoqVcKcJ5LD2QDd6dLrUZN_CBaQpsBIvFhlTEbXP0aiV6O32YyLKn-YWv203Jp',
    role: 'renter',
    memberSince: '2022',
    location: 'Berkeley, CA',
    rating: 4.9,
    trips: 12,
    responseRate: 'N/A'
  },
  'admin': {
    id: 'admin',
    name: 'Platform Admin',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEwnsKxi1Ea847DaCKE-G4wOrXULNXQwC0H5AP_shtcWv74ODAOtw16jupXmg-LrI4eCZiY9Z-Ups77EwBSy0dvpBcjQBIOi9cE5yq8cI7TPwFmMM635KXeb8R08bGI5X5INFRqIWiGTlu1hUIqQF5BW9t9gIIiZIqDlWxrQZ0jOjqCLH0a92aWer9p9GOevvQyDjReahgWuZPkHaZNWbXmxtBWMkbn6nmjA9pYW_7rjR7dSWbEu1vyJHW1ChnkTV1oRF-cv3zCynv',
    role: 'admin',
    memberSince: '2020',
    location: 'HQ',
    rating: 5.0,
    trips: 0,
    responseRate: '100%'
  }
};

export const MOCK_CARS: Car[] = [
  {
    id: 'tesla-3',
    make: 'Tesla',
    model: 'Model 3',
    year: 2023,
    type: 'Electric',
    price: 85,
    rating: 5.0,
    tripsCount: 120,
    ownerId: 'sarah',
    status: 'active',
    images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuALr62Y_4kPM8ISu-gOjLAITMRdq-lXGFrjin5mDVITogTnQNVf4xIFg9UwZw6mDV5B6aH1QM3CiGJehFgNA94KgzFjmcmDwtTPrUiB8OzGtBW-dtTRXhBJ5VV3huR3fMrIJcC0N7nAWCG1-hAOHkxp9Z7GynfowmM67ovDVOJow41eQtA84Bobs-rLts6fP-yn8wd4cm-duZcace6vuqY-vnV7VRwUalp5dey6lRpA1P2iSSzJ0xFOcFaBJ_uQFqgpvWmmDiB2DxAN'],
    location: 'San Francisco, CA',
    specs: { engine: 'Dual Motor', transmission: 'Automatic', seats: 5, acceleration: '3.1s' },
    description: 'Experience the future of driving with this pristine 2023 Tesla Model 3.',
    isVerified: true
  },
  {
    id: 'bmw-x5',
    make: 'BMW',
    model: 'X5',
    year: 2022,
    type: 'SUV',
    price: 120,
    rating: 4.9,
    tripsCount: 45,
    ownerId: 'sarah',
    status: 'active',
    images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuAq8RjbNPl37D_BuYAtkmpCEGtR2dSSvePFJbq2RBgRIeWxwwi-bYiJsnGXHQ_0rerWeLj3oq-ZqYUdE5X_5tNUzlntmiy2eghYPyyNnoy4Hy9c9nonf9jAqQDQk-EiDCJZQqsz0GLSSzGstvD26vEG1oYciQJS1x1HlqwZzdUUKjT7uwJDvmtks7cOeguBKWLN4VeE5qK4JKhMEfI5n-qqTiO_mOVqaDwpvo259803rcTu_a80NYXSOXe-vBwTsfGNi0gb4JMdZVc3'],
    location: 'San Jose, CA',
    specs: { engine: '3.0L Turbo', transmission: 'Automatic', seats: 5 },
    description: 'Luxury SUV for all your family needs.',
    isVerified: true
  }
];

export const MOCK_REQUESTS: BookingRequest[] = [
  {
    id: 'br1',
    carId: 'tesla-3',
    carName: 'Tesla Model 3',
    renterName: 'Alex Driver',
    renterAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIVNrMIrE2iiVb2hvHRr60KtekjGU0MezTcrRRCVlKGMC0VfElWQpbj4KQTwIT3m8F1GxB5h5XfmD_MC-lZcrtllKsaaPJuv2JZu7V6xLIeQAPw0pxWKA4paZ1hs6amFe0-DshPt1oCrqBu9l41EK-5AUoj06JXNZoPf2NrfmWPOCqsoNpLTlktxCcNruBXyyy-QtbkHIg7ESC_VVoqVcKcJ5LD2QDd6dLrUZN_CBaQpsBIvFhlTEbXP0aiV6O32YyLKn-YWv203Jp',
    dates: 'Oct 12 - 15',
    totalPrice: 340,
    status: 'pending'
  }
];

export const MOCK_REVIEWS: Review[] = [
  {
    id: 'r1',
    userName: 'James D.',
    userAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEwnsKxi1Ea847DaCKE-G4wOrXULNXQwC0H5AP_shtcWv74ODAOtw16jupXmg-LrI4eCZiY9Z-Ups77EwBSy0dvpBcjQBIOi9cE5yq8cI7TPwFmMM635KXeb8R08bGI5X5INFRqIWiGTlu1hUIqQF5BW9t9gIIiZIqDlWxrQZ0jOjqCLH0a92aWer9p9GOevvQyDjReahgWuZPkHaZNWbXmxtBWMkbn6nmjA9pYW_7rjR7dSWbEu1vyJHW1ChnkTV1oRF-cv3zCynv',
    date: 'Oct 2023',
    rating: 5,
    content: "Sarah was an amazing host! The car was spotless and exactly as described."
  }
];

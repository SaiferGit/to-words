"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'ರೂಪಾಯಿ',
                plural: 'ರೂಪಾಯಿಗಳು',
                symbol: '₹',
                fractionalUnit: {
                    name: 'ಪೈಸಾ',
                    plural: 'ಪೈಸೆ',
                    symbol: '',
                },
            },
            texts: {
                and: 'ಮತ್ತು',
                minus: 'ಮೈನಸ್',
                only: 'ಮಾತ್ರ',
                point: 'ಬಿಂದು',
            },
            numberWordsMapping: [
                { number: 10000000, value: 'ಕೋಟಿ' },
                { number: 100000, value: 'ಲಕ್ಷ' },
                { number: 1000, value: 'ಸಾವಿರ' },
                { number: 900, value: 'ಒಂಬತ್ತುನೂರು' },
                { number: 800, value: 'ಎಂಟುನೂರು' },
                { number: 700, value: 'ಏಳುನೂರು' },
                { number: 600, value: 'ಆರುನೂರು' },
                { number: 500, value: 'ಐದುನೂರು' },
                { number: 400, value: 'ನಾಲ್ಕುನೂರು' },
                { number: 300, value: 'ಮೂರುನೂರು' },
                { number: 200, value: 'ಎರಡುನೂರು' },
                { number: 100, value: 'ನೂರು' },
                { number: 99, value: 'ತೊಂಬತ್ತೊಂಬತ್ತು' },
                { number: 98, value: 'ತೊಂಬತ್ತೆಂಟು' },
                { number: 97, value: 'ತೊಂಬತ್ತೇಳು' },
                { number: 96, value: 'ತೊಂಬತ್ತಾರು' },
                { number: 95, value: 'ತೊಂಬತ್ತೈದು' },
                { number: 94, value: 'ತೊಂಬತ್ತ ನಾಲ್ಕು' },
                { number: 93, value: 'ತೊಂಬತ್ತ ಮೂರು' },
                { number: 92, value: 'ತೊಂಬತ್ತೆರಡು' },
                { number: 91, value: 'ತೊಂಬತ್ತೊಂದು' },
                { number: 90, value: 'ತೊಂಬತ್ತು' },
                { number: 89, value: 'ಎಂಬತ್ತೊಂಬತ್ತು' },
                { number: 88, value: 'ಎಂಬತ್ತೆಂಟು' },
                { number: 87, value: 'ಎಂಬತ್ತೇಳು' },
                { number: 86, value: 'ಎಂಬತ್ತಾರು' },
                { number: 85, value: 'ಎಂಬತ್ತೈದು' },
                { number: 84, value: 'ಎಂಬತ್ತ್ ನಾಲ್ಕು' },
                { number: 83, value: 'ಎಂಬತ್ತ್ ಮೂರು' },
                { number: 82, value: 'ಎಂಬತ್ತೆರಡು' },
                { number: 81, value: 'ಎಂಬತ್ತೊಂದು' },
                { number: 80, value: 'ಎಂಬತ್ತು' },
                { number: 79, value: 'ಎಪ್ಪತ್ತೊಂಬತ್ತು' },
                { number: 78, value: 'ಎಪ್ಪತ್ತೆಂಟು' },
                { number: 77, value: 'ಎಪ್ಪತ್ತೇಳು' },
                { number: 76, value: 'ಎಪ್ಪತ್ತಾರು' },
                { number: 75, value: 'ಎಪ್ಪತ್ತೈದು' },
                { number: 74, value: 'ಎಪ್ಪತ್ತ್ ನಾಲ್ಕು' },
                { number: 73, value: 'ಎಪ್ಪತ್ತ್ ಮೂರು' },
                { number: 72, value: 'ಎಪ್ಪತ್ತೆರಡು' },
                { number: 71, value: 'ಎಪ್ಪತ್ತೊಂದು' },
                { number: 70, value: 'ಎಪ್ಪತ್ತು' },
                { number: 69, value: 'ಅರವತ್ತೊಂಬತ್ತು' },
                { number: 68, value: 'ಅರವತ್ತೆಂಟು' },
                { number: 67, value: 'ಅರವತ್ತೇಳು' },
                { number: 66, value: 'ಅರವತ್ತಾರು' },
                { number: 65, value: 'ಅರವತ್ತೈದು' },
                { number: 64, value: 'ಅರವತ್ತ್ ನಾಲ್ಕು' },
                { number: 63, value: 'ಅರವತ್ತ್ ಮೂರು' },
                { number: 62, value: 'ಅರವತ್ತೆರಡು' },
                { number: 61, value: 'ಅರವತ್ತೊಂದು' },
                { number: 60, value: 'ಅರವತ್ತು' },
                { number: 59, value: 'ಐವತ್ತೊಂಬತ್ತು' },
                { number: 58, value: 'ಐವತ್ತೆಂಟು' },
                { number: 57, value: 'ಐವತ್ತೇಳು' },
                { number: 56, value: 'ಐವತ್ತಾರು' },
                { number: 55, value: 'ಐವತ್ತೈದು' },
                { number: 54, value: 'ಐವತ್ತ್ನಾಲ್ಕು' },
                { number: 53, value: 'ಐವತ್ತಮೂರು' },
                { number: 52, value: 'ಐವತ್ತೆರಡು' },
                { number: 51, value: 'ಐವತ್ತೊಂದು' },
                { number: 50, value: 'ಐವತ್ತು' },
                { number: 49, value: 'ನಲವತ್ತೊಂಬತ್ತು' },
                { number: 48, value: 'ನಲವತ್ತೆಂಟು' },
                { number: 47, value: 'ನಲವತ್ತೇಳು' },
                { number: 46, value: 'ನಲವತ್ತಾರು' },
                { number: 45, value: 'ನಲವತ್ತೈದು' },
                { number: 44, value: 'ನಲವತ್ತ್ ನಾಲ್ಕು' },
                { number: 43, value: 'ನಲವತ್ತ್ ಮೂರು' },
                { number: 42, value: 'ನಲವತ್ತ್ ಎರಡು' },
                { number: 41, value: 'ನಲವತ್ತೊಂದು' },
                { number: 40, value: 'ನಲವತ್ತು' },
                { number: 39, value: 'ಮೂವತ್ತ್ ಒಂಬತ್ತು' },
                { number: 38, value: 'ಮೂವತ್ಎಂಟು' },
                { number: 37, value: 'ಮೂವತ್ಏಳು' },
                { number: 36, value: 'ಮೂವತ್ಆರು' },
                { number: 35, value: 'ಮೂವತ್ತ್ ಐದು' },
                { number: 34, value: 'ಮೂವತ್ತ್ ನಾಲ್ಕು' },
                { number: 33, value: 'ಮೂವತ್ತ್ ಮೂರು' },
                { number: 32, value: 'ಮೂವತ್ತ್ಎರಡು' },
                { number: 31, value: 'ಮೂವತ್ತ್ಒಂದು' },
                { number: 30, value: 'ಮೂವತ್ತು' },
                { number: 29, value: 'ಇಪ್ಪತ್ತ್’ಒಂಬತ್ತು' },
                { number: 28, value: 'ಇಪ್ಪತ್ತ್’ಎಂಟು' },
                { number: 27, value: 'ಇಪ್ಪತ್ತ್’ಏಳು' },
                { number: 26, value: 'ಇಪ್ಪತ್ತ್’ಆರು' },
                { number: 25, value: 'ಇಪ್ಪತ್ತ್’ಐದು' },
                { number: 24, value: 'ಇಪ್ಪತ್ತ್’ನಾಲ್ಕು' },
                { number: 23, value: 'ಇಪ್ಪತ್ತ್’ಮೂರು' },
                { number: 22, value: 'ಇಪ್ಪತ್ತ್’ಎರಡು' },
                { number: 21, value: 'ಇಪ್ಪತ್ತ್’ಒಂದು' },
                { number: 20, value: 'ಇಪ್ಪತ್ತು' },
                { number: 19, value: 'ಹತ್ತೊಂಬತ್ತು' },
                { number: 18, value: 'ಹದಿನೆಂಟು' },
                { number: 17, value: 'ಹದಿನೇಳು' },
                { number: 16, value: 'ಹದಿನಾರು' },
                { number: 15, value: 'ಹದಿನೈದು' },
                { number: 14, value: 'ಹದಿನಾಲ್ಕು' },
                { number: 13, value: 'ಹದಿಮೂರು' },
                { number: 12, value: 'ಹನ್ನೆರಡು' },
                { number: 11, value: 'ಹನ್ನೊಂದು' },
                { number: 10, value: 'ಹತ್ತು' },
                { number: 9, value: 'ಒಂಬತ್ತು' },
                { number: 8, value: 'ಎಂಟು' },
                { number: 7, value: 'ಏಳು' },
                { number: 6, value: 'ಆರು' },
                { number: 5, value: 'ಐದು' },
                { number: 4, value: 'ನಾಲ್ಕು' },
                { number: 3, value: 'ಮೂರು' },
                { number: 2, value: 'ಎರಡು' },
                { number: 1, value: 'ಒಂದು' },
                { number: 0, value: 'ಸೊನ್ನೆ' },
            ],
            namedLessThan1000: true,
        };
    }
}
exports.default = Locale;

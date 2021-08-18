import { convertWordsToJumbled } from "./utils";

export const roundsMap = [
    {
        images : [{
              original: 'https://picsum.photos/id/1018/1000/600/',
          },
        ],
        words: convertWordsToJumbled('Cycle'),
        correctSpelling: 'cycle'
    },
    {
        images : [{
              original: 'https://picsum.photos/id/1015/1000/600/',
          },
        ],
        words: convertWordsToJumbled('Bike'),
        correctSpelling: 'bike'
    },
    {
        images : [{
              original: 'https://picsum.photos/id/1013/1000/600/',
          },
        ],
        words: convertWordsToJumbled('encyclopedia'),
        correctSpelling: 'encyclopedia'
    },
    {
        images : [{
              original: 'https://picsum.photos/id/1019/1000/600/',
          },
        ],
        words: convertWordsToJumbled('mathematics'),
        correctSpelling: 'mathematics'
    },
]

import { convertWordsToJumbled } from "./utils";

export const roundsMap = [
    {
        images : [
            {
                original: 'https://images.unsplash.com/photo-1554332208-9dfebcc48334?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
                thumbnail: 'https://images.unsplash.com/photo-1554332208-9dfebcc48334?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
            },
            {
              original: 'https://images.unsplash.com/photo-1521022969448-49639904ed7b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
              thumbnail: 'https://images.unsplash.com/photo-1521022969448-49639904ed7b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
            },
            {
              original: 'https://images.unsplash.com/photo-1579160746359-81167618a8b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
              thumbnail: 'https://images.unsplash.com/photo-1579160746359-81167618a8b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
            },
        ],
        words: convertWordsToJumbled('fireplace'),
        correctSpelling: 'fireplace'
    },
    {
        images : [
            {
              original: 'https://images.unsplash.com/photo-1613280194169-6bb2f32a6bfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1051&q=80',
              thumbnail: 'https://images.unsplash.com/photo-1613280194169-6bb2f32a6bfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1051&q=80',
            },
            {
              original: 'https://images.unsplash.com/photo-1539786774582-0707555f1f72?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
              thumbnail: 'https://images.unsplash.com/photo-1539786774582-0707555f1f72?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
            },
            {
              original: 'https://images.unsplash.com/photo-1461151304267-38535e780c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1490&q=80',
              thumbnail: 'https://images.unsplash.com/photo-1461151304267-38535e780c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1490&q=80',
            },
        ],
        words: convertWordsToJumbled('television'),
        correctSpelling: 'television'
    },
    {
        images : [
            {
              original: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
              thumbnail: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
            },
            {
              original: 'https://images.unsplash.com/photo-1550740850-48b638b91c65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1514&q=80',
              thumbnail: 'https://images.unsplash.com/photo-1550740850-48b638b91c65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1514&q=80',
            },
            {
              original: 'https://images.unsplash.com/photo-1529074963764-98f45c47344b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1064&q=80',
              thumbnail: 'https://images.unsplash.com/photo-1529074963764-98f45c47344b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1064&q=80',
            },
        ],
        words: convertWordsToJumbled('airplane'),
        correctSpelling: 'airplane'
    },
    {
        images : [
            {
              original: 'https://images.unsplash.com/photo-1429041966141-44d228a42775?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
              thumbnail: 'https://images.unsplash.com/photo-1429041966141-44d228a42775?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
            },
            {
              original: 'https://images.unsplash.com/uploads/14127101912749510b8ed/82743738?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
              thumbnail: 'https://images.unsplash.com/uploads/14127101912749510b8ed/82743738?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
            },
            {
              original: 'https://images.unsplash.com/40/lUUnN7VGSoWZ3noefeH7_Baker%20Beach-12.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
              thumbnail: 'https://images.unsplash.com/40/lUUnN7VGSoWZ3noefeH7_Baker%20Beach-12.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
            },
        ],
        words: convertWordsToJumbled('bridge'),
        correctSpelling: 'bridge'
    },
    {
        images : [
            {
              original: 'https://images.unsplash.com/photo-1475724017904-b712052c192a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
              thumbnail: 'https://images.unsplash.com/photo-1475724017904-b712052c192a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
            },
            {
              original: 'https://images.unsplash.com/photo-1444930694458-01babf71870c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1430&q=80',
              thumbnail: 'https://images.unsplash.com/photo-1444930694458-01babf71870c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1430&q=80',
            },
            {
              original: 'https://images.unsplash.com/photo-1583131997607-06ef8ab7b10e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
              thumbnail: 'https://images.unsplash.com/photo-1583131997607-06ef8ab7b10e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
            },
        ],
        words: convertWordsToJumbled('flower'),
        correctSpelling: 'flower'
    },
    {
        images : [
            {
              original: 'https://images.unsplash.com/photo-1616089803779-a16536c2f398?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
              thumbnail: 'https://images.unsplash.com/photo-1616089803779-a16536c2f398?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
            },
            {
              original: 'https://images.unsplash.com/photo-1543339520-51ebace10a0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80',
              thumbnail: 'https://images.unsplash.com/photo-1543339520-51ebace10a0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80',
            },
            {
              original: 'https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
              thumbnail: 'https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
            },
        ],
        words: convertWordsToJumbled('macaroni'),
        correctSpelling: 'macaroni'
    },
    {
        images : [
            {
              original: 'https://images.unsplash.com/photo-1609702847389-b8aec1b0b929?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1430&q=80',
              thumbnail: 'https://images.unsplash.com/photo-1609702847389-b8aec1b0b929?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1430&q=80',
            },
            {
              original: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1489&q=80',
              thumbnail: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1489&q=80',
            },
            {
              original: 'https://images.unsplash.com/photo-1612241143917-d05c85c43751?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
              thumbnail: 'https://images.unsplash.com/photo-1612241143917-d05c85c43751?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
            },
        ],
        words: convertWordsToJumbled('speaker'),
        correctSpelling: 'speaker'
    },
    {
        images : [
            {
              original: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1453&q=80',
              thumbnail: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1453&q=80',
            },
            {
              original: 'https://images.unsplash.com/photo-1529148482759-b35b25c5f217?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
              thumbnail: 'https://images.unsplash.com/photo-1529148482759-b35b25c5f217?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
            },
            {
              original: 'https://images.unsplash.com/photo-1549383028-df014fa3a325?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
              thumbnail: 'https://images.unsplash.com/photo-1549383028-df014fa3a325?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
            },
        ],
        words: convertWordsToJumbled('library'),
        correctSpelling: 'library'
    },
    {
        images : [
            {
              original: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
              thumbnail: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
            },
            {
              original: 'https://images.unsplash.com/photo-1592861956120-e524fc739696?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
              thumbnail: 'https://images.unsplash.com/photo-1592861956120-e524fc739696?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
            },
            {
              original: 'https://images.unsplash.com/photo-1571705042748-55feda1cfadc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80',
              thumbnail: 'https://images.unsplash.com/photo-1571705042748-55feda1cfadc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80',
            },
            {
              original: 'https://images.unsplash.com/photo-1560053608-13721e0d69e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
              thumbnail: 'https://images.unsplash.com/photo-1560053608-13721e0d69e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
            },
        ],
        words: convertWordsToJumbled('restaurant'),
        correctSpelling: 'restaurant'
    },
    {
        images : [
            {
              original: 'https://images.unsplash.com/photo-1494129935429-873eafa78178?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1378&q=80',
              thumbnail: 'https://images.unsplash.com/photo-1494129935429-873eafa78178?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1378&q=80',
            },
            {
              original: 'https://images.unsplash.com/photo-1494129935429-873eafa78178?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1078&q=80',
              thumbnail: 'https://images.unsplash.com/photo-1494129935429-873eafa78178?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1078&q=80',
            },
        ],
        words: convertWordsToJumbled('traffic light'),
        correctSpelling: 'traffic light'
    },
]

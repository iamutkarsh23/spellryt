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

import * as mockQuestions from '../api/mockQuestions.json'
import { TopicQuestion } from '../interfaces/topics'

export const getQuestions = (topicId: number): Promise<TopicQuestion[]> =>  {
  return new Promise(res => {
    setTimeout(() => {
      // @ts-ignore
      res(mockQuestions['default'][parseInt(topicId)])
    }, 550)
  })
}
import moment from 'moment'

import postReactivityMd from 'raw-loader!./data/vue-reactivity-md.txt'
import postReactivityHtml from 'raw-loader!./data/vue-reactivity-html.txt'

import rendererMd from 'raw-loader!./data/renderer-md.txt'
import rendererHtml from 'raw-loader!./data/renderer-html.txt'

import pipelineMd from 'raw-loader!./data/pipeline-md.txt'
import pipelineHtml from 'raw-loader!./data/pipeline-html.txt'

import storeMd from 'raw-loader!./data/store-md.txt'
import storeHtml from 'raw-loader!./data/store-html.txt'

import cypressMd from 'raw-loader!./data/cypress-md.txt'
import cypressHtml from 'raw-loader!./data/cypress-html.txt'

export interface Post {
  id: string
  title: string
  created: moment.Moment
  html?: string
  markdown?: string
  authorId: string
}

// 2020-01-01
export const today: Post = {
  id: '1',
  title: 'Today',
  created: moment().subtract(1, 'second'),
  authorId: '1'
}

export const thisWeek: Post = {
  id: '2',
  title: 'This Week',
  created: moment().subtract(2, 'days'),
  authorId: '1'
}

export const thisMonth: Post = {
  id: '3',
  title: 'This Month',
  created: moment().subtract(12, 'days'),
  authorId: '1'
}

export const demoData: Post[] = [
  {
    id: '4',
    title: '๐ Understanding Vue 3 Reactivity',
    created: moment().subtract(1, 'second'),
    authorId: '1',
    markdown: postReactivityMd,
    html: postReactivityHtml,
  },
  {
    id: '5',
    title: '๐ Writing a Custom Renderer',
    created: moment().subtract(1, 'second'),
    authorId: '1',
    markdown: rendererMd,
    html: rendererHtml,
  },
  {
    id: '6',
    title: '๐ฎ A Futuristic Functional Language for Web Dev - ESNext Pipelines',
    created: moment().subtract(1, 'second'),
    authorId: '1',
    markdown: pipelineMd,
    html: pipelineHtml,
  },
  {
    id: '7',
    title: '๐ช Building a Type Safe Store',
    created: moment().subtract(1, 'second'),
    authorId: '1',
    markdown: storeMd,
    html: storeHtml,
  },
  {
    id: '8',
    title: '๐งช Cypress Component Testing',
    created: moment().subtract(1, 'second'),
    authorId: '1',
    markdown: cypressMd,
    html: cypressHtml,
  },
]

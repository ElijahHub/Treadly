import axios from "axios"
import { blogImg1, blogImg2, blogImg3, blogImg4, blogImg5, blogImg6, f_icon1, f_icon2, f_icon3, f_icon4, label_1, label_2, label_3, label_4, label_5, shoe_1, shoe_2, shoe_3, shoe_4, shoe_5, shoe_6, shoe_7, shoe_8, shoe_9 } from "../assets"

export const navigation = [
  {
    id: '0',
    title: 'Home',
    url: '/'
  },
  {
    id: '1',
    title: 'About',
    url: '/about'
  },
  {
    id: '2',
    title: 'Shop',
    url: '/shop'
  },
  {
    id: '3',
    title: 'Blog',
    url: '/blog'
  },
  {
    id: '4',
    title: 'Contacts',
    url: '/contacts'
  },
]

export const features = [
  {
    icon: f_icon1,
    title: 'Fast Delivery',
    text: 'Fast delivery on selected items thanks to our improved logistics.'
  },
  {
    icon: f_icon2,
    title: 'Return Policy',
    text: 'Get refund if item arrive late or not as described.'
  },
  {
    icon: f_icon3,
    title: 'Value-for-Money',
    text: 'We offer competitive prices on millions of items.'
  },
  {
    icon: f_icon4,
    title: 'Secure Payment',
    text: 'Safe payment methods preferred by international shoppers. '
  },

]

export const adsItem = [
  {
    image: shoe_3,
    current_price: '$45.5',
    prev_price: '$192.3'
  },
  {
    image: shoe_5,
    current_price: '$25.5',
    prev_price: '$112.9'
  },
  {
    image: shoe_4,
    current_price: '$51.5',
    prev_price: '$199.0'
  },

]

export const products = [
  {
    image: shoe_4,
    name: 'Nike Air Force 1',
    price: '$345',
  },
  {
    image: shoe_4,
    name: 'Nike Air Force 1',
    price: '$345',
  },
  {
    image: shoe_4,
    name: 'Nike Air Force 1',
    price: '$345',
  },
  {
    image: shoe_4,
    name: 'Nike Air Force 1',
    price: '$345',
  },
  {
    image: shoe_4,
    name: 'Nike Air Force 1',
    price: '$345',
  },
  {
    image: shoe_4,
    name: 'Nike Air Force 1',
    price: '$345',
  },
  {
    image: shoe_4,
    name: 'Nike Air Force 1',
    price: '$345',
  },
  {
    image: shoe_4,
    name: 'Nike Air Force 1',
    price: '$345',
  },
]

export const labels = [label_1, label_2, label_3, label_4, label_5]

export const FAQS = [
  'Bring of had which their whose yours it own ?',
  'Over shall air cant subdue fly divide him ?',
  'Waters one you will creeping ?',
  'Fowl, given morning seed fruitful kind beast be ?',
  'Land had man doesn\'t the very a kind ?'
]

export const deals = [
  {
    image: shoe_1,
    name: 'Nike Sportsman',
    currentPrice: '$189.00',
    prevPrice: '$210.00'
  },
  {
    image: shoe_2,
    name: 'Nike Sportsman',
    currentPrice: '$177.00',
    prevPrice: '$200.00'
  },
  {
    image: shoe_3,
    name: 'Nike Sportsman',
    currentPrice: '$180.00',
    prevPrice: '$205.50'
  },
  {
    image: shoe_4,
    name: 'Nike Sportsman',
    currentPrice: '$109.00',
    prevPrice: '$190.92'
  },
  {
    image: shoe_5,
    name: 'Nike Sportsman',
    currentPrice: '$179.00',
    prevPrice: '$205.33'
  },
  {
    image: shoe_6,
    name: 'Nike Sportsman',
    currentPrice: '$199.00',
    prevPrice: '$220.00'
  },
  {
    image: shoe_7,
    name: 'Nike Sportsman',
    currentPrice: '$179.00',
    prevPrice: '$200.10'
  },
  {
    image: shoe_8,
    name: 'Nike Sportsman',
    currentPrice: '$182.00',
    prevPrice: '$213.00'
  },
  {
    image: shoe_9,
    name: 'Nike Sportsman',
    currentPrice: '$109.00',
    prevPrice: '$170.00'
  },
]

export const catalog = [
  {
    title: 'BRANDING',
    choices: [
      { choiceTitle: 'New Balance', value: 'new balance' },
      { choiceTitle: 'Converse', value: 'converse' },
      { choiceTitle: 'Pull&Bear', value: 'pull&bear' },
      { choiceTitle: 'Adidas', value: 'adidas originals' },
      { choiceTitle: 'Puma', value: 'puma' },
      { choiceTitle: 'Nike', value: 'nike' },
      { choiceTitle: 'Jack and Jones', value: 'jack & jones' },
      { choiceTitle: 'Asos Design', value: 'asos design' },
      { choiceTitle: 'Timberland', value: 'timberland' },
    ]
  },
  {
    title: 'FILTER PRICE',
    choices: [
      {
        choiceTitle: '$0.00 - $50.00',
        value: 50
      },
      {
        choiceTitle: '$50.00 - $100.00',
        value: 100
      },
      {
        choiceTitle: '$100.00 - $150.00',
        value: 150
      },
      {
        choiceTitle: '$150.00 - $200.00',
        value: 200
      },
      {
        choiceTitle: '$200.00 - $250.00',
        value: 250
      },
      {
        choiceTitle: '$250.00+',
        value: 251
      },
    ]
  },
  {
    title: 'COLORS',
    choices: [
      { choiceTitle: 'bg-[white]', value: 'white' },
      { choiceTitle: 'bg-[green]', value: 'green' },
      { choiceTitle: 'bg-[navy]', value: 'navy' },
      { choiceTitle: 'bg-[brown]', value: 'brown' },
      { choiceTitle: 'bg-[silver]', value: 'silver' },
      { choiceTitle: 'bg-[gray]', value: 'gray' },
      { choiceTitle: 'bg-[black]', value: 'black' },
      { choiceTitle: 'bg-[red]', value: 'red' },
      { choiceTitle: 'bg-[tan]', value: 'tan' },
      { choiceTitle: 'bg-[beige]', value: 'beige' },
      { choiceTitle: 'bg-[oatmeal]', value: 'oatmeal' },
      { choiceTitle: 'bg-[burgundy]', value: 'burgundy' },
      { choiceTitle: 'bg-[cream]', value: 'cream' }
    ]
  },

]

export const blogContent = [
  {
    image: blogImg1,
    title: 'Tree earth fowl given move deep lesser After.'
  },
  {
    image: blogImg2,
    title: 'Given Set was without from god divide rule Hath.'
  },
  {
    image: blogImg3,
    title: 'A lesson in path silhouettes with our design team.'
  },
  {
    image: blogImg4,
    title: 'Heaven upon heaven move every have.'
  },
  {
    image: blogImg5,
    title: 'Third darkness and second dry greater.'
  },
  {
    image: blogImg6,
    title: 'The morning let you created everyday.'
  },
]

export const checkOutFormEl = [
  {
    title: 'names',
    element: [
      {
        id: 'firstName',
        name: 'firstName',
        label: 'First Name',
        placeholder: ''
      },
      {
        id: 'lastName',
        name: 'lastName',
        label: 'Last Name',
        placeholder: ''
      },
    ]
  },
  {
    title: 'country',
    element: [
      {
        id: 'country',
        name: 'country',
        label: 'Country',
        placeholder: ''
      }
    ]
  },
  {
    title: 'city',
    element: [
      {
        id: 'city',
        name: 'city',
        label: 'Town/City',
        placeholder: ''
      }
    ]
  },
  {
    title: 'address',
    element: [
      {
        id: 'strAddress',
        name: 'strAddress',
        label: 'Address',
        placeholder: 'Street Address'
      },
      {
        id: 'apartAddress',
        name: 'apartAddress',
        label: '',
        placeholder: 'Apartment, Suite, Unite etc (optional)'
      },
    ]
  },
  {
    title: 'postcode',
    element: [
      {
        id: 'postcode',
        name: 'postcode',
        label: 'Postcode / Zip',
        placeholder: ''
      }
    ]
  },
  {
    title: 'contacts',
    element: [
      {
        id: 'phone',
        name: 'phone',
        label: 'Phone',
        placeholder: ''
      },
      {
        id: 'email',
        name: 'email',
        label: 'Email',
        placeholder: ''
      },
    ]
  },
]

export const confirmation = [
  {
    title: 'Order Info',
    details: {
      "Order number": 60235,
      Date: "24 June, 2023",
      Total: "USD 2210",
      "Payment method": "Check payment",
    }
  },
  {
    title: 'Billing Address',
    details: {
      "Street": '86/4',
      City: "Kaduna",
      Country: "Nigeria",
      Postcode: 36952,
    }
  },
  {
    title: 'Shipping Address',
    details: {
      "Street": '16/2',
      City: "Lagos",
      Country: "Nigeria",
      Postcode: 30328,
    }
  },

]

export const footer = [
  {
    title: 'QUICK LINKS',
    links: [
      {
        linkTitle: 'Home',
        path: '/'
      },
      {
        linkTitle: 'About Us',
        path: '/about-us'
      },
      {
        linkTitle: 'Shop',
        path: '/shop'
      },
      {
        linkTitle: 'Blog',
        path: '/blog'
      },
    ]
  },
  {
    title: 'CUSTOMER SERVICE',
    links: [
      {
        linkTitle: 'Contact Us',
        path: '/contact'
      },
      {
        linkTitle: 'Payment Methods',
        path: '/about-us'
      },
      {
        linkTitle: 'Delivery',
        path: '/about-us'
      },
      {
        linkTitle: 'Return & Exchanges',
        path: '/about-us'
      },
    ]
  }
]



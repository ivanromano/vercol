import { defineConfig } from 'windicss/helpers'

import formsPlugin from 'windicss/plugin/forms'


export default defineConfig({
  shortcuts: {
    'btn': 'py-2 px-4 font-semibold rounded-lg shadow-md',
    'btn-green': 'text-white bg-red-500 hover:bg-green-700',
    'vic-btn': 'relative inline-flex items-center justify-center p-0.5 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg transform group bg-[#00DC82] group-hover:(from-cyan-500 to-blue-500) hover:(translate-y-1 text-white) focus:(ring-[5px] outline-none ring-cyan-200) duration-300',
    'vic-btn-span': 'font-medium relative px-5 py-2.5 transition-all ease-in duration-200 bg-[#00DC82] hover:(bg-light-50 text-[#00DC82]) rounded-md ',
    'vic-img-carousel': ' rounded-md transform hover:scale-110 group-hover:scale-[1.1] duration-300',
    'antSliderLink': 'bg-[#c96e3c] border border-[#df9638] py-[0px]',
    'antSliderLink2': 'bg-[#c96e3c] py-[1px]',
  },
  plugins: [formsPlugin],
})
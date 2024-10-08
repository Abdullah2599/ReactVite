import { Carousel } from 'flowbite-react'
import Navbar from './components/navbar'
import Footerbottom from './components/Footerbottom'
import * as Yup from 'yup';
import { Formik,Field,ErrorMessage, Form } from 'formik'




function App() {

  return (
    <>
     <Navbar/>
      <div className="h56 sm:h-64 xl:h-80 2xl:h-96 p-5">
        <Carousel>
        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://www.shoutmeloud.com/wp-content/uploads/2020/08/What-is-blogging.jpg" alt=""/>
        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://www.shoutmeloud.com/wp-content/uploads/2020/08/What-is-blogging.jpg" alt=""/>
        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://www.shoutmeloud.com/wp-content/uploads/2020/08/What-is-blogging.jpg" alt=""/>
        </Carousel>
      </div>
     <div className="grid grid-cols-2 gap-2 place-items-center py-4">
    <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://www.shoutmeloud.com/wp-content/uploads/2020/08/What-is-blogging.jpg" alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
</a>
<a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://www.shoutmeloud.com/wp-content/uploads/2020/08/What-is-blogging.jpg" alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
</a>
<a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://www.shoutmeloud.com/wp-content/uploads/2020/08/What-is-blogging.jpg" alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
</a>
<a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://www.shoutmeloud.com/wp-content/uploads/2020/08/What-is-blogging.jpg" alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
</a>
<a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://www.shoutmeloud.com/wp-content/uploads/2020/08/What-is-blogging.jpg" alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
</a>
<a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://www.shoutmeloud.com/wp-content/uploads/2020/08/What-is-blogging.jpg" alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
</a>


  


</div>
<p>&nbsp;</p>
<div className='text-2xl font-black text-center'>Contact us</div>
<Formik
initialValues={{
    name: '',
    email: '',
    gender: '',
    message: ''
  }
  
}


validationSchema={
    Yup.object().shape({
      name: Yup.string()
       .required('Name is required')
       .max(50, 'Name must be at most 50 characters'),
      email: Yup.string()
       .required('Email is required')
       .email('Invalid email format'),
      gender: Yup.string()
       .required('Gender is required'),
      message: Yup.string()
       .required('Message is required')
       .max(500, 'Message must be at most 500 characters')
    })
  
}

onSubmit={(values, {resetForm}) => {
    console.log(values);
    // reset form
    resetForm();
}}
>

{({values}) => (
<Form class="max-w-sm mx-auto">
<div class="mb-5">
    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
    <Field name="name" type="name"class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John doe" required />
    <ErrorMessage name="name" component="div" className="text-red-500 dark:text-red-300" />
  </div>
  {values.name !== '' &&
  <div class="mb-5">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
    <Field type="email" name="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
      <ErrorMessage name="email" component="div" className="text-red-500 dark:text-red-300" />
  </div>}
  {values.email!== '' &&
  
  <div class="mb-5">
    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Gender</label>
    <Field as="select" name="gender" type="gender" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
      <option>Select Gender</option>
      <option value={"Male"}>Male</option>
      <option value={"Female"}>Female</option>
      </Field>
      <ErrorMessage name="gender" component="div" className="text-red-500 dark:text-red-300" />
  </div>
}
{values.gender!== '' &&
  <div class="mb-5">
    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Message</label>
    <Field as="textarea" name="message" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Message" required >
        </Field>
        <ErrorMessage name="message" component="div" className="text-red-500 dark:text-red-300" />
  </div>
}
{values.message !== '' && values.name!== '' && values.email !== '' && values.gender !== '' &&
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
}
  </Form>
)}
</Formik>

<p>&nbsp;</p>
<Footerbottom/>

    </>
  )
}

export default App

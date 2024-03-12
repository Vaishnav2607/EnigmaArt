import React from 'react'
import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { preview } from '../assets'
import { getRandomPrompt } from '../utils'
import {FormField, Loader} from '../components'

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: ''
  });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSubmit = () =>{

  }
  const handleChange = () =>{

  }
  const handleSurpriseMe = () =>{

  }
  return (
    <section className='max-w-7xl mx-auto'>
      <div className="">
        <h1 className="font-extrabold text-[#222328] text-[32px]">
          Create
        </h1>
        <p className="text-[#666e75] mt-2 text-[14px] max-w-[500px]">
          Create imaginative and visually stunning
          images through EnigmaAI and share them with community
        </p>
      </div>
      <form action="" className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField 
          LabelName="Your Name"
          type="text"
          name="name"
          placeholder="John Doe"
          value={form.name}
          handleChange={handleChange}
          />
          <FormField 
          LabelName="Prompt"
          type="text"
          name="prompt"
          placeholder="A Synthwave Hedgehog, Blade Runner Cyberpunk"
          value={form.prompt}
          handleChange={handleChange}
          isSurpriseMe
          handleSurpriseMe={handleSurpriseMe}
          />
          
        </div>
      </form>
    </section>
  )
}

export default CreatePost
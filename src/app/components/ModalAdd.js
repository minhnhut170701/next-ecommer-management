"use client";
import React, { useState } from "react";

function ModalAdd() {
  const [formData, setFormData] = useState({
    productName: '',
    price: '',
    category: '',
    tag: '',
    passForProduct: '',
    infor: '',
    description: '',
    photo: ''
  })
  const handleSubmit = async (e) =>{
    try {
      const response = await fetch('https://nextjs13-ecommerce.onrender.com/api/product/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({...formData}),
      });

      const data = await response.json();
      if(data){
        console.log("data nè: ", data)
      }
    } catch (error) {
      
    }
  }

  const changeImage = (e) =>{
    if(e.target.files[0]){
      const file = e.target.files[0]
      const reader = new FileReader();
      reader.addEventListener('load', (event) => {
        const base64String = event.target.result;
        setFormData((state) => ({
          ...state,
          photo: base64String ,
        }));
      });

      reader.readAsDataURL(file);
    }
  }

  const handleChange = (e) =>{
      setFormData((state) =>({
        ...state,
        [e.target.name] : e.target.value,
    }))
  }
  return (
    <div>
      <h3 className="text-center text-xl uppercase font-bold mb-5">
        Thêm sản phẩm
      </h3>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tên sản phẩm"
          className="w-full py-2 border px-2 rounded-md"
          name='productName'
          onChange={handleChange}
          
        />
        <div className="flex space-x-14 items-center">
          <input
            type="text"
            placeholder="Giá"
            className="py-2 border px-2 rounded-md w-[30%]"
            name='price'
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Thể loại"
            className="py-2 border px-2 rounded-md w-[30%]"
            name='category'
            onChange={handleChange}
          />
          <select
            id="cars"
            className="py-2 border px-2 rounded-md w-[30%]"
            name='tag'
            onChange={handleChange}
          >
            <option value="volvo">Tag</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <input type="file" className="py-2 border px-2 rounded-md w-full" name='photo' onChange={changeImage}/>
        <textarea
          placeholder="Mô tả sản phảm"
          className="w-full rounded-md h-[200px]"
          name='description'
          onChange={handleChange}
        ></textarea>

        <p>Thông số sản phảm</p>
        <div className="flex items-center justify-around">
          <input
            type="text"
            placeholder="Kích thước"
            id="w"
            className="py-2 border px-2 rounded-md w-[30%]"
            name='infor'
            onChange={handleChange}
          />
        </div>
        <input
          type="text"
          placeholder="Mã sản phảm"
          id="w"
          className="py-2 border px-2 rounded-md w-full"
          name='passForProduct'
          onChange={handleChange}
        />
        <div className="flex items-center justify-end space-x-4">
          <div className="modal-action mt-0">
            <label
              htmlFor="my-modal-1"
              className="p-2 bg-gray-400 rounded-md cursor-pointer"
            >
              Hủy
            </label>
          </div>
          <button
            type="submit"
            className="p-2 bg-green-400 text-white rounded-md"
          >
            Thêm
          </button>
        </div>
      </form>
    </div>
  );
}

export default ModalAdd;

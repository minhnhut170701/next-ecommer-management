import React from "react";

function ModalAdd() {
  return (
    <div>
      <h3 className="text-center text-xl uppercase font-bold mb-5">
        Thêm sản phẩm
      </h3>
      <form className="space-y-5">
        <input
          type="text"
          placeholder="Tên sản phẩm"
          className="w-full py-2 border px-2 rounded-md"
        />
        <div className="flex space-x-14 items-center">
          <input
            type="text"
            placeholder="Giá"
            className="py-2 border px-2 rounded-md w-[30%]"
          />
          <input
            type="text"
            placeholder="Thể loại"
            className="py-2 border px-2 rounded-md w-[30%]"
          />
          <select
            name="cars"
            id="cars"
            className="py-2 border px-2 rounded-md w-[30%]"
          >
            <option value="volvo">Số lượng</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <input type="file" className="py-2 border px-2 rounded-md w-full" />
      </form>
    </div>
  );
}

export default ModalAdd;

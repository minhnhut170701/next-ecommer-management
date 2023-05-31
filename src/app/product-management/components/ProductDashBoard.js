"use client";
import Image from "next/image";
import { BsTrashFill } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import ModalAdd from "./ModalAdd";

function ProductDashBoard({ productData }) {
  const [checkedRows, setCheckedRows] = useState([]);
  const [isCheckedForTable, setIsCheckedForTable] = useState(false);
  const onChecked = (e, id) => {
    if (e.target.checked) {
      setCheckedRows((prevCheckedRows) => [...prevCheckedRows, id]);
      setIsCheckedForTable(true);
    } else {
      setCheckedRows((prevCheckedRows) =>
        prevCheckedRows.filter((rowId) => rowId !== id)
      );
    }
  };

  useEffect(() => {
    if (checkedRows.length == 0) {
      setIsCheckedForTable(false);
    }
  }, [checkedRows]);

  return (
    <>
      <div className="w-full flex items-center justify-around">
        <input
          type="text"
          placeholder="Tìm kiếm đơn hàng"
          className="p-4 w-[50%] border"
        />
        <select name="cars" id="cars" className="p-4 border">
          <option value="volvo">Giá</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <select name="cars" id="cars" className="p-4 border">
          <option value="volvo">Số lượng</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>

        <button className="p-4 bg-blue-500 text-white">Tìm kiếm</button>

        <label htmlFor="my-modal-4" className="p-4 bg-red-500 text-white">
          Thêm
        </label>
        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <label htmlFor="my-modal-4" className="modal cursor-pointer">
          <label className="modal-box relative max-w-[800px]" htmlFor="">
            <ModalAdd />
          </label>
        </label>
      </div>
      {/* table */}
      <div className="mt-10 max-w-[1150px] w-full">
        <div className="overflow-x-auto w-full h-[500px] overflow-y-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Sản phẩm</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th>Mô tả</th>
                {isCheckedForTable && <th>Xóa</th>}
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {productData.map((item, i) => {
                const rowId = `row_${i}`;
                const isChecked = checkedRows.includes(rowId);
                return (
                  <tr key={i}>
                    <th>
                      <label>
                        <input
                          type="checkbox"
                          className="checkbox"
                          onChange={(e) => onChecked(e, rowId)}
                        />
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center space-x-6">
                        <Image
                          src={item.banner[0]}
                          alt={item.productName}
                          width={300}
                          height={300}
                          className="object-cover w-[50px] h-[50px]"
                        />

                        <div>
                          <p className="font-bold w-48 whitespace-normal line-clamp-1">
                            {item.productName}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      Zemlak, Daniel and Leannon
                      <br />
                      <span className="badge badge-ghost badge-sm">
                        Desktop Support Technician
                      </span>
                    </td>
                    <td>Purple</td>
                    <th>
                      <button className="btn btn-ghost btn-xs">details</button>
                    </th>
                    {isChecked && (
                      <th>
                        <label htmlFor="my-modal-4" className="btn">
                          <BsTrashFill />
                        </label>
                        <input
                          type="checkbox"
                          id="my-modal-4"
                          className="modal-toggle"
                        />
                        <label
                          htmlFor="my-modal-4"
                          className="modal cursor-pointer"
                        >
                          <label
                            className="modal-box relative max-w-[800px]"
                            htmlFor=""
                          >
                            <h3 className="text-lg font-bold">
                              Bạn có chắc muốn xóa?
                            </h3>
                            <p className="py-4">
                              Sau khi chấp nhận, sản phẩm sẽ xóa vĩnh viễn khỏi
                              web
                            </p>
                            <div className="flex items-center justify-end space-x-5">
                              <div className="modal-action mt-0">
                                <label
                                  htmlFor="my-modal-4"
                                  className="p-2 bg-gray-400 rounded-md cursor-pointer"
                                >
                                  Hủy
                                </label>
                              </div>

                              <button className="p-2 bg-green-400 text-white rounded-md">
                                Chấp nhận
                              </button>
                            </div>
                          </label>
                        </label>
                      </th>
                    )}
                  </tr>
                );
              })}
            </tbody>
            {/* foot */}
            <tfoot>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
                {isCheckedForTable && <th className=" text-black">Xóa</th>}
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
}

export default ProductDashBoard;

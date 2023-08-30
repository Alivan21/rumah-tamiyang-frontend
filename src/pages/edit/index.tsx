import { useState } from "react";
import Input from "./components/Input";

const Edit = () => {
    const [name, setName] = useState<string>("Fauzan Pradana");
    const [gender, setGender] = useState<string>("male");
    const [address, setAddress] = useState<string>("Malang, Jawa Timur");
    const [dateBirth, setDateBirth] = useState(14);
    const [monthBirth, setMonthBirth] = useState("jun");
    const [yearBirth, setYearBirth] = useState(2002);
    return (
        <div className="container py-8">
            <h1 className="text-xl text-center font-semibold">Edit Form</h1>
            <form action="" className="py-8 flex flex-col gap-6">
                <Input initialValue={name} setValue={setName} label="Nama" isRequired />
                <Input initialValue={address} setValue={setAddress} label="Alamat" isRequired />
                <div className="flex flex-col gap-2">
                    <label htmlFor="gender" className="block text-lg text-gray-800">Jenis Kelamin</label>
                    <select name="gender" id="gender" className="border border-gray-300 p-3 md:p-4 rounded-lg" value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="male">Laki-laki</option>
                        <option value="female">Perempuan</option>
                    </select>
                </div>
                <div>
                    <p className="block text-lg text-gray-800 mb-4">Tanggal lahir</p>
                    <div className="flex gap-2 justify-between">
                        <div className="flex flex-col gap-2 w-1/4">
                            <label htmlFor="name" className="block text-md text-gray-800">Tanggal</label>
                            <input type="number" className="border border-gray-200 block w-full p-3 md:p-4 rounded-lg" value={dateBirth} onChange={(e) => setDateBirth(Number(e.target.value))} />
                        </div>
                        <div className="flex flex-col gap-2 w-1/2">
                            <label htmlFor="name" className="block text-md text-gray-800">Bulan</label>
                            <select name="gender" id="gender" className="border border-gray-200 p-3 h-full md:p-4 rounded-lg" value={monthBirth} onChange={e => setMonthBirth(e.target.value)}>
                                <option value="jan">Januari</option>
                                <option value="feb">Februari</option>
                                <option value="mar">Maret</option>
                                <option value="apr">April</option>
                                <option value="mei">Mei</option>
                                <option value="jun">Juni</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2 w-1/4">
                            <label htmlFor="name" className="block text-md text-gray-800">Tahun</label>
                            <input type="number" className="border border-gray-200 block p-3 md:p-4 rounded-lg" value={yearBirth} onChange={e => setYearBirth(Number(e.target.value))} />
                        </div>
                    </div>
                </div>
                <div className="mb-4" />
                <button className="bg-[#094C30] text-white p-2 rounded-xl">Update Data</button>
            </form>
        </div>
    );
}

export default Edit;
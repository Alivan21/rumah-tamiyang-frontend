interface IProps {
    label: string;
    initialValue?: string | number;
    setValue: any;
    isRequired?: boolean;
    labelStyle?: string;
};

const Input = ({ label, initialValue, isRequired = false, setValue, labelStyle }: IProps) => {
    return (
        <div className="flex flex-col gap-2 w-full">
            <label htmlFor="name" className={`block text-lg text-gray-800 ${labelStyle}`}>{label} {isRequired && <span className="text-lg text-[#094C30]">*</span>}</label>
            {isRequired ? <input type="text" required className="border border-gray-300 block w-full p-3 md:p-4 rounded-lg" value={initialValue} onChange={(e) => { setValue(e.target.value) }} /> : <input type="text" className="border border-gray-200 block w-full p-2 rounded-lg" value={initialValue} onChange={(e) => { setValue(e.target.value) }} />}
        </div>
    );
}

export default Input;
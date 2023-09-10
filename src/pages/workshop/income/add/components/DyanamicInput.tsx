import { useState } from "react";
import { Button } from "@/components/ui/button";

export interface InputItem {
  amount: number;
  description: string;
}

interface DynamicInputProps {
  initialInputList: InputItem[];
  onSetInputList: (inputList: InputItem[]) => void;
}

function DynamicInput(props: DynamicInputProps) {
  const [inputList, setInputList] = useState<InputItem[]>(props.initialInputList);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index] = {
      ...list[index],
      [name]: value,
    };
    setInputList(list);
  };

  const handleRemoveClick = (index: number, e: { preventDefault: () => void }) => {
    e.preventDefault();
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleAddClick = () => {
    setInputList([...inputList, { amount: 0, description: "" }]);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    props.onSetInputList([...inputList]);
  };

  return (
    <div className="flex flex-col gap-3">
      {inputList.map((x, i) => (
        <div className="flex items-center gap-2" key={i}>
          <input
            type="number"
            name="amount"
            id={`amount-${i}`}
            className="w-1/4 rounded-lg border border-gray-300 p-3"
            value={x.amount}
            onChange={e => handleInputChange(e, i)}
          />
          <input
            type="text"
            name="description"
            id={`description-${i}`}
            placeholder="Keterangan"
            className="w-1/3 rounded-lg border border-gray-300 p-3"
            value={x.description}
            onChange={e => handleInputChange(e, i)}
          />
          <div className="flex items-center gap-2">
            {inputList.length !== 1 && (
              <Button onClick={e => handleRemoveClick(i, e)}>
                <i className="fa-solid fa-minus text-xl"></i>
              </Button>
            )}
            {inputList.length - 1 === i && (
              <Button onClick={handleAddClick}>
                <i className="fa-solid fa-plus text-xl"></i>
              </Button>
            )}
          </div>
        </div>
      ))}
      <Button className="mt-5" onClick={handleSubmit}>
        Konfirmasi
      </Button>
    </div>
  );
}

export default DynamicInput;

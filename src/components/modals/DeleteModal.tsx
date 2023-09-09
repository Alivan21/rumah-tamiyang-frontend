import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogAction,
} from "../ui/alert-dialog";
import { BiSolidTrash } from "react-icons/bi";

type DeleteModalProp = {
  deleteHandler: () => void;
};

function DeleteModal({ deleteHandler }: DeleteModalProp) {
  return (
    <AlertDialog>
      <AlertDialogTrigger className="m-auto w-fit cursor-pointer rounded-lg bg-red-500 p-1.5">
        <BiSolidTrash color="white" size={17} />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <p>Apakah Anda yakin untuk menghapus item ini?</p>
        <AlertDialogCancel>Batal</AlertDialogCancel>
        <AlertDialogAction className="bg-red-600 hover:bg-red-700" onClick={deleteHandler}>
          Yakin
        </AlertDialogAction>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default DeleteModal;

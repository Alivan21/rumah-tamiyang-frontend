import { ReactNode } from "react";
import { AlertDialog, AlertDialogTrigger, AlertDialogCancel, AlertDialogContent, AlertDialogAction } from "../ui/alert-dialog";

type DeleteModalProp = {
    children: ReactNode;
    deleteHandler: () => void;
};

function DeleteModal({ children, deleteHandler }: DeleteModalProp) {
    return (
        <AlertDialog>
            <AlertDialogTrigger>{children}</AlertDialogTrigger>
            <AlertDialogContent>
                <p>Apakah Anda yakin untuk menghapus item ini?</p>
                <AlertDialogCancel>Batal</AlertDialogCancel>
                <AlertDialogAction className="bg-red-600 hover:bg-red-700" onClick={deleteHandler}>Yakin</AlertDialogAction>
            </AlertDialogContent>
        </AlertDialog>
    );
}

export default DeleteModal;
import { ReactNode } from "react";
import { AlertDialog, AlertDialogTrigger, AlertDialogCancel, AlertDialogContent, AlertDialogAction } from "../ui/alert-dialog";
import { useToast } from "../ui/use-toast";

type DeleteModalProp = {
    id: number;
    children: ReactNode;
};

function DeleteModal({ id, children }: DeleteModalProp) {
    const { toast } = useToast();
    const deleteHandler = () => {
        toast({
            variant: "success",
            description: "Berhasil dihapus",
        })
    };
    return (
        <AlertDialog>
            <AlertDialogTrigger>{children}</AlertDialogTrigger>
            <AlertDialogContent>
                <p>Apakah Anda yakin untuk menghapus item id-{id}?</p>
                <AlertDialogCancel>Batal</AlertDialogCancel>
                <AlertDialogAction className="bg-red-600 hover:bg-red-700" onClick={deleteHandler}>Yakin</AlertDialogAction>
            </AlertDialogContent>
        </AlertDialog>
    );
}

export default DeleteModal;
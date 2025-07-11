import Dialog from "@mui/material/Dialog";

interface FormModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  dark?: boolean
}

export default function FormModal({
  open,
  onClose,
  title,
  children,
  dark = true
}: FormModalProps) {
  return (
    <Dialog
      onClose={onClose}
      open={open}
      slotProps={{
        paper: {
          style: {
            backgroundColor: dark ? "black" : "white",
            color: dark ? "white" : "black",
            borderRadius: "16px",
            maxWidth: "600px",
            width: "100%",
            border: "1px solid red",
            overflow: "auto",
          },
          sx: {
            '&::-webkit-scrollbar': {
              width: '8px',
            },
            '&::-webkit-scrollbar-track': {
              background: 'transparent',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#2a2a2a',
              borderRadius: '4px',
            },
            '&::-webkit-scrollbar-thumb:hover': {
              backgroundColor: '#3a3a3a',
            },
            '&::-webkit-scrollbar-button': {
              display: 'none',
            },
            scrollbarWidth: 'thin',
            scrollbarColor: '#2a2a2a transparent',
          },
        },
      }}
    >
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-6">{title}</h2>

        <div className="flex flex-col gap-y-4">
          {children}
        </div>
      </div>
    </Dialog>
  );
}

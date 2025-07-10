import Dialog from "@mui/material/Dialog";

interface FormModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void> | void;
  title: string;
  children: React.ReactNode;
}

export default function FormModal({
  open,
  onClose,
  onSubmit,
  title,
  children,
}: FormModalProps) {
  return (
    <Dialog
      onClose={onClose}
      open={open}
      slotProps={{
        paper: {
          style: {
            backgroundColor: "black",
            color: "white",
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

        <div onSubmit={onSubmit} className="flex flex-col gap-y-4">
          {/* Os campos do formulário serão renderizados aqui */}
          {children}
        </div>
      </div>
    </Dialog>
  );
}

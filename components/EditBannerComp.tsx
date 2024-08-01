import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from '@mui/material';

type EditBannerProps = {
  open: boolean;
  initialData?: {
    id: number;
    title: string;
    description: string;
    cta: string;
    image: string;
    background: string;
  };
  onSave: (data: any) => void;
  onClose: () => void;
};

const EditBannerTemplateBs: React.FC<EditBannerProps> = ({ open, initialData, onSave, onClose, image }) => {
  const [formData, setFormData] = useState(initialData || {
    id: 0,
    title: '',
    description: '',
    cta: '',
    image: '',
    background: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    onSave(formData);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Ad Banner</DialogTitle>
      <DialogContent>
        <img src = {image} style={{ width: '70%', borderRadius: '8px' }} />
        <TextField
          name="title"
          label="Title"
          value={formData.title}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="description"
          label="Description"
          value={formData.description}
          onChange={handleChange}
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />
       <Button>Learn More</Button>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditBannerTemplateBs;

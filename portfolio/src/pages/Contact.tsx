import { Box, Typography, Alert, TextField, Button } from "@mui/material";
import { useState } from "react";
import { useLanguage } from "../function/Language";

export const Contact = () => {
  const { t, language } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message?: string;
  }>({ type: "idle" });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "idle" });

    try {
      // Backend API endpoint - Make sure your backend server is running on port 3001
      const apiEndpoint = 'http://localhost:3001/api/contact';

      const res = await fetch(apiEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          language: language,
        }),
      });

      if (!res.ok) {
        let errorMessage = t.sendFailed || "Failed to send message";
        try {
          const errorData = await res.json();
          errorMessage = errorData.error || errorMessage;
        } catch {
          // If response is not JSON, use default message
        }
        throw new Error(errorMessage);
      }

      // Get success message from backend response
      let successMessage = t.messageSent || "Message sent — thank you!";
      try {
        const responseData = await res.json();
        successMessage = responseData.message || successMessage;
      } catch {
        // If response is not JSON, use default message
      }

      setStatus({ type: "success", message: successMessage });
      setForm({ name: "", email: "", message: "" });
    } catch (err: any) {
      setStatus({
        type: "error",
        message: err.message ?? (t.somethingWentWrong || "Something went wrong"),
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ maxWidth: 700 }}>
      <Typography variant="h4" gutterBottom>
        {t.contact}
      </Typography>

      {status.type === "success" && (
        <Alert severity="success">{status.message}</Alert>
      )}
      {status.type === "error" && (
        <Alert severity="error">{status.message}</Alert>
      )}

      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <TextField
          label={t.name}
          name="name"
          value={form.name}
          onChange={(ev) => handleChange(ev)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label={t.email}
          name="email"
          value={form.email}
          onChange={(ev) => handleChange(ev)}
          fullWidth
          margin="normal"
          type="email"
          required
        />
        <TextField
          label={t.message}
          name="message"
          value={form.message}
          onChange={(ev) => handleChange(ev)}
          fullWidth
          margin="normal"
          multiline
          rows={6}
          required
        />
        <Button
          variant="contained"
          type="submit"
          sx={{ mt: 2 }}
          disabled={loading}
        >
          {loading ? t.sendingMessage : t.messageSend}
        </Button>
      </Box>
    </Box>
  );
};

// app/contact/page.tsx
"use client";

import React, { useState } from "react";
import { Box, Typography, TextField, Button, Alert } from "@mui/material";
import { useLanguage } from "../model/contexts/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<{ type: "idle" | "success" | "error"; message?: string }>(
    { type: "idle" }
  );
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "idle" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error((await res.json()).error || "Failed to send");

      setStatus({ type: "success", message: "Message sent — thank you!" });
      setForm({ name: "", email: "", message: "" });
    } catch (err: any) {
      setStatus({ type: "error", message: err.message ?? "Something went wrong" });
    } finally {
      setLoading(false);
    }
  };


  return (
    <Box sx={{ maxWidth: 700 }}>
      <Typography variant="h4" gutterBottom>
        Contact
      </Typography>

      {status.type === "success" && <Alert severity="success">{status.message}</Alert>}
      {status.type === "error" && <Alert severity="error">{status.message}</Alert>}

      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <TextField
          label={t.name}
          name={t.name}
          value={form.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label={t.email}
          name={t.email}
          value={form.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
          type="email"
          required
        />
        <TextField
          label={t.message}
          name={t.message}
          value={form.message}
          onChange={handleChange}
          fullWidth
          margin="normal"
          multiline
          rows={6}
          required
        />
        <Button variant="contained" type="submit" sx={{ mt: 2 }} disabled={loading}>
          {loading ? t.sendingMessage : t.messageSend}
        </Button>
      </Box>
    </Box>
  );
}

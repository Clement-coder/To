"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Mail, Globe, CalendarDays, Trophy, Gem, MapPin, X, Pencil, UserRound, Camera } from "lucide-react";

const initialUser = {
  name: "Radoslava Georgieva Ilieva",
  email: "kamenovaradoslava384@gmail.com",
  profileImage: "/profile.jpeg",
  gender: "Female",
  rewardTier: "Gold Member",
  rewardAmount: "€40,000",
  feeToPay: "€200",
  memberId: "TYT-2024-00384",
  country: "Bulgaria 🇧🇬",
  joinDate: "March 2024",
};

const glass: React.CSSProperties = {
  background: "rgba(255,255,255,0.07)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: "1px solid rgba(255,255,255,0.15)",
  borderRadius: "20px",
};

type UserType = typeof initialUser;

export default function Dashboard() {
  const [user, setUser] = useState<UserType>(initialUser);
  const [editOpen, setEditOpen] = useState(false);
  const [form, setForm] = useState<UserType>(initialUser);
  const fileRef = useRef<HTMLInputElement>(null);

  function openEdit() { setForm({ ...user }); setEditOpen(true); }
  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) setForm((f) => ({ ...f, profileImage: URL.createObjectURL(file) }));
  }
  function handleSave() { setUser({ ...form }); setEditOpen(false); }

  return (
    <>
      <style>{`
        .dash-body { padding: 0 32px 48px; }
        .dash-row { display: flex; gap: 24px; flex-wrap: nowrap; }
        .profile-card { flex: 0 0 300px; min-width: 300px; }
        .right-col { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 20px; }
        .stat-row { display: flex; gap: 16px; }
        .stat-card { flex: 1; }
        .nav-id { display: flex; align-items: center; gap: 6px; }
        @media (max-width: 768px) {
          .dash-body { padding: 0 16px 40px; }
          .dash-row { flex-direction: column; }
          .profile-card { flex: unset; min-width: unset; width: 100%; }
          .stat-row { flex-direction: column; }
          .nav-id span.nav-label { display: none; }
        }
      `}</style>

      <div style={{
        minHeight: "100vh",
        width: "100%",
        background: "#000000",
        overflowX: "hidden",
        fontFamily: "Arial, sans-serif",
      }}>
        {/* NAV */}
        <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 32px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <Image src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg"
              alt="Toyota" width={90} height={60}
              style={{ filter: "brightness(0) invert(1)", objectFit: "contain" }} />
            <div>
              <p style={{ color: "#fff", fontWeight: 800, fontSize: "22px", letterSpacing: "3px" }}>TOYOTA</p>
              <p style={{ color: "#ffaaaa", fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase" }}>Rewards Portal</p>
            </div>
          </div>
          <div className="nav-id" style={{ ...glass, padding: "8px 18px", borderRadius: "999px" }}>
            <span className="nav-label" style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px" }}>Member ID:</span>
            <span style={{ color: "#fff", fontSize: "14px", fontFamily: "monospace", fontWeight: 600 }}>{user.memberId}</span>
          </div>
        </nav>

        {/* BODY */}
        <div className="dash-body" style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
          <div className="dash-row">

            {/* Profile Card */}
            <div className="profile-card" style={{ ...glass, padding: "32px 24px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ position: "relative", marginBottom: "18px" }}>
                <div style={{ width: "120px", height: "120px", borderRadius: "50%", overflow: "hidden", border: "4px solid #cc0000", boxShadow: "0 0 0 4px rgba(204,0,0,0.25)" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={user.profileImage} alt="Profile" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                </div>
                <span style={{ position: "absolute", bottom: "6px", right: "6px", width: "16px", height: "16px", borderRadius: "50%", background: "#22c55e", border: "2px solid #fff" }} />
              </div>

              <p style={{ color: "#fff", fontWeight: 700, fontSize: "18px", textAlign: "center", lineHeight: "1.4" }}>{user.name}</p>
              <span style={{ marginTop: "10px", background: "rgba(255,204,0,0.15)", color: "#ffcc00", border: "1px solid rgba(255,204,0,0.4)", borderRadius: "999px", padding: "6px 18px", fontSize: "15px", fontWeight: 600 }}>
                ★ {user.rewardTier}
              </span>

              <div style={{ marginTop: "24px", width: "100%", display: "flex", flexDirection: "column", gap: "12px" }}>
                <InfoRow icon={<Mail size={16} />} label="Email" value={user.email} />
                <InfoRow icon={<Globe size={16} />} label="Country" value={user.country} />
                <InfoRow icon={<CalendarDays size={16} />} label="Member Since" value={user.joinDate} />
                <InfoRow icon={<UserRound size={16} />} label="Gender" value={user.gender} />
              </div>

              <button onClick={openEdit} style={{ marginTop: "24px", width: "100%", padding: "14px", borderRadius: "12px", background: "linear-gradient(135deg,#cc0000,#ff4444)", color: "#fff", fontWeight: 700, fontSize: "16px", border: "none", cursor: "pointer", boxShadow: "0 4px 15px rgba(204,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                <Pencil size={17} /> Edit Profile
              </button>
            </div>

            {/* Right Column */}
            <div className="right-col">

              {/* Welcome */}
              <div style={{ ...glass, padding: "28px 32px" }}>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "18px" }}>Welcome back,</p>
                <h1 style={{ color: "#fff", fontSize: "36px", fontWeight: 800, marginTop: "6px" }}>{user.name.split(" ")[0]} 👋</h1>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "16px", marginTop: "6px" }}>Here&apos;s your Toyota rewards summary.</p>
              </div>

              {/* Stat Cards */}
              <div className="stat-row">
                <StatCard icon={<Trophy size={22} color="#ffcc00" />} label="Total Reward" value={user.rewardAmount} sub="Pending release" accent="#ffcc00" />
                <StatCard icon={<Gem size={22} color="#60a5fa" />} label="Tier Status" value={user.rewardTier} sub="Top 10% of members" accent="#60a5fa" />
                <StatCard icon={<MapPin size={22} color="#34d399" />} label="Country" value="Bulgaria" sub="EU Member" accent="#34d399" />
              </div>

              {/* Fee Card */}
              <div style={{ ...glass, padding: "28px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "20px" }}>
                <div>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "15px", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "8px" }}>Processing Fee Required</p>
                  <p style={{ color: "#fff", fontSize: "52px", fontWeight: 900, lineHeight: 1 }}>{user.feeToPay}</p>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "16px", marginTop: "10px" }}>
                    Platform fee — pay via your agent to release your{" "}
                    <strong style={{ color: "#ffcc00" }}>{user.rewardAmount}</strong> reward
                  </p>
                </div>
                <button style={{ padding: "14px 36px", borderRadius: "12px", background: "rgba(255,255,255,0.1)", color: "#fff", fontSize: "15px", fontWeight: 600, border: "1px solid rgba(255,255,255,0.2)", cursor: "pointer", whiteSpace: "nowrap" }}>
                  View Invoice
                </button>
              </div>

              {/* Progress */}
              <div style={{ ...glass, padding: "24px 32px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                  <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "15px", fontWeight: 600 }}>Reward Release Progress</span>
                  <span style={{ color: "#fff", fontSize: "16px", fontWeight: 800 }}>75%</span>
                </div>
                <div style={{ width: "100%", height: "12px", borderRadius: "999px", background: "rgba(255,255,255,0.1)" }}>
                  <div style={{ width: "75%", height: "12px", borderRadius: "999px", background: "linear-gradient(90deg,#cc0000,#ffcc00)" }} />
                </div>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "15px", marginTop: "10px" }}>
                  Pay platform fee of <strong style={{ color: "#ffcc00" }}>{user.feeToPay}</strong> through your agent to release your reward
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* EDIT MODAL */}
      {editOpen && (
        <div onClick={(e) => e.target === e.currentTarget && setEditOpen(false)}
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.82)", backdropFilter: "blur(8px)", zIndex: 50, display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "24px 16px", overflowY: "auto" }}>
          <div style={{ ...glass, background: "rgba(15,5,5,0.96)", padding: "36px", width: "100%", maxWidth: "500px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "28px" }}>
              <h3 style={{ color: "#fff", fontSize: "22px", fontWeight: 700 }}>Edit Profile</h3>
              <button onClick={() => setEditOpen(false)} style={{ color: "rgba(255,255,255,0.5)", background: "none", border: "none", cursor: "pointer", display: "flex" }}><X size={24} /></button>
            </div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "28px" }}>
              <div style={{ position: "relative", cursor: "pointer" }} onClick={() => fileRef.current?.click()}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={form.profileImage} alt="Preview" style={{ width: "100px", height: "100px", borderRadius: "50%", objectFit: "cover", border: "3px solid #cc0000" }} />
                <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Camera size={26} color="#fff" />
                </div>
              </div>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "14px", marginTop: "10px" }}>Click to change photo</p>
              <input ref={fileRef} type="file" accept="image/*" style={{ display: "none" }} onChange={handleImageChange} />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <Field label="Full Name" value={form.name} onChange={(v) => setForm((f) => ({ ...f, name: v }))} />
              <Field label="Email Address" value={form.email} onChange={(v) => setForm((f) => ({ ...f, email: v }))} type="email" />
              <Field label="Country" value={form.country} onChange={(v) => setForm((f) => ({ ...f, country: v }))} />
              <Field label="Gender" value={form.gender} onChange={(v) => setForm((f) => ({ ...f, gender: v }))} />
              <Field label="Member Since" value={form.joinDate} onChange={(v) => setForm((f) => ({ ...f, joinDate: v }))} />
              <Field label="Reward Tier" value={form.rewardTier} onChange={(v) => setForm((f) => ({ ...f, rewardTier: v }))} />
              <Field label="Total Reward" value={form.rewardAmount} onChange={(v) => setForm((f) => ({ ...f, rewardAmount: v }))} />
              <Field label="Platform Fee" value={form.feeToPay} onChange={(v) => setForm((f) => ({ ...f, feeToPay: v }))} />
              <Field label="Member ID" value={form.memberId} onChange={(v) => setForm((f) => ({ ...f, memberId: v }))} />
            </div>

            <div style={{ display: "flex", gap: "14px", marginTop: "28px" }}>
              <button onClick={() => setEditOpen(false)} style={{ flex: 1, padding: "14px", borderRadius: "12px", background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.15)", cursor: "pointer", fontSize: "15px" }}>
                Cancel
              </button>
              <button onClick={handleSave} style={{ flex: 1, padding: "14px", borderRadius: "12px", background: "linear-gradient(135deg,#cc0000,#ff4444)", color: "#fff", fontWeight: 700, border: "none", cursor: "pointer", fontSize: "15px", boxShadow: "0 4px 15px rgba(204,0,0,0.4)" }}>
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function InfoRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", background: "rgba(255,255,255,0.06)", borderRadius: "12px", padding: "12px 14px" }}>
      <span style={{ color: "rgba(255,255,255,0.55)", marginTop: "2px", flexShrink: 0 }}>{icon}</span>
      <div style={{ minWidth: 0 }}>
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "13px", textTransform: "uppercase", letterSpacing: "1px" }}>{label}</p>
        <p style={{ color: "#fff", fontSize: "16px", fontWeight: 500, wordBreak: "break-word", marginTop: "2px" }}>{value}</p>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value, sub, accent }: { icon: React.ReactNode; label: string; value: string; sub: string; accent: string }) {
  return (
    <div className="stat-card" style={{ background: "rgba(255,255,255,0.07)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "18px", padding: "22px 20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
        <span>{icon}</span>
        <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: accent, display: "inline-block" }} />
      </div>
      <p style={{ color: "#fff", fontWeight: 700, fontSize: "20px", lineHeight: 1.2 }}>{value}</p>
      <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px", textTransform: "uppercase", letterSpacing: "1px", marginTop: "6px" }}>{label}</p>
      <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "14px", marginTop: "4px" }}>{sub}</p>
    </div>
  );
}

function Field({ label, value, onChange, type = "text" }: { label: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <div>
      <label style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: "13px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>{label}</label>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)}
        style={{ width: "100%", padding: "13px 16px", borderRadius: "10px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", fontSize: "15px", outline: "none" }}
        onFocus={(e) => (e.target.style.borderColor = "rgba(204,0,0,0.8)")}
        onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.15)")} />
    </div>
  );
}

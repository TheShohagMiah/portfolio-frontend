import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FiLayout,
  FiServer,
  FiLayers,
  FiZap,
  FiArrowUpRight,
} from "react-icons/fi";
import ServiceCard from "../../ui/services/ServiceCard";
import axiosInstance from "../../lib/axios";
import ServiceCardSkeleton from "../../ui/services/ServiceSkeleton";
import SectionHeader from "../../ui/SectionHeader";

// ── ICON MAP ─────────────────────────────────────────────────
const ICON_MAP = { FiLayout, FiServer, FiLayers, FiZap };

// ── SKELETONS ─────────────────────────────────────────────────

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const fetchServices = async () => {
      try {
        setLoading(true);
        const res = await axiosInstance.get("/api/services", {
          signal: controller.signal,
        });

        // Check if data exists and is an array (adjust based on your API response structure)
        const rawData = Array.isArray(res.data)
          ? res.data
          : res.data?.data || [];

        if (rawData.length > 0) {
          const mapped = rawData.map((s) => ({
            ...s,
            icon: ICON_MAP[s.icon] || FiZap, // Convert string from DB to React Component
          }));
          setServices(mapped);
        } else {
          useFallback();
        }
      } catch (err) {
        if (err.name !== "CanceledError") useFallback();
      } finally {
        setLoading(false);
      }
    };

    const useFallback = () => {
      setServices(
        services.map((s) => ({
          ...s,
          icon: ICON_MAP[s.icon] || FiZap,
        })),
      );
    };

    fetchServices();
    return () => controller.abort();
  }, []);

  // Ensure we always have 4 cards for the bento layout logic
  const displayCards = [...services];
  while (displayCards.length > 0 && displayCards.length < 4)
    displayCards.push(null);

  return (
    <section
      id="services"
      className="py-10 md:py-20 bg-background relative overflow-hidden"
    >
      {/* Ambient glows */}
      <div
        className="absolute top-20 -left-20 w-[400px] h-[400px] rounded-full blur-[120px] opacity-[0.06] pointer-events-none"
        style={{ background: "var(--brand)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full blur-[100px] opacity-[0.05] pointer-events-none"
        style={{ background: "var(--brand)" }}
      />

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <SectionHeader label="What I Offer" index="02"></SectionHeader>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {loading ? (
              <>
                <div className="md:col-span-2">
                  <ServiceCardSkeleton tall />
                </div>
                <div className="md:col-span-1">
                  <ServiceCardSkeleton />
                </div>
                <div className="md:col-span-1">
                  <ServiceCardSkeleton />
                </div>
                <div className="md:col-span-2">
                  <ServiceCardSkeleton tall />
                </div>
              </>
            ) : (
              <>
                <div className="md:col-span-2">
                  <ServiceCard
                    service={displayCards[3]}
                    delay={0}
                    tall
                    accent
                  />
                </div>
                <div className="md:col-span-1">
                  <ServiceCard
                    service={displayCards[2]}
                    delay={0.1}
                    tall={false}
                  />
                </div>
                <div className="md:col-span-1">
                  <ServiceCard
                    service={displayCards[1]}
                    delay={0.2}
                    tall={false}
                  />
                </div>
                <div className="md:col-span-2">
                  <ServiceCard
                    service={displayCards[0]}
                    delay={0.3}
                    tall
                    accent
                  />
                </div>
              </>
            )}
          </div>

          {/* CTA Strip */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 relative rounded-3xl border overflow-hidden p-8 flex flex-col md:flex-row items-center justify-between gap-6"
            style={{
              borderColor: "var(--brand-border)",
              background: "var(--brand-muted)",
            }}
          >
            <div className="text-center md:text-left">
              <h4 className="text-xl font-bold text-foreground">
                Need a custom solution?
              </h4>
              <p className="text-muted-foreground text-sm mt-1">
                Open for freelance work and full-time roles.
              </p>
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group relative flex items-center gap-2.5 px-7 py-3.5 rounded-2xl font-black text-sm tracking-widest font-mono"
              style={{
                background: "var(--brand)",
                color: "var(--brand-foreground, #fff)",
              }}
            >
              Get a Quote <FiArrowUpRight size={15} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;

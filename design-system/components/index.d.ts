import * as React from 'react';

/** Pill action. Primary = saffron, once per view. */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  /** Renders an <a> when set. */
  href?: string;
  /** Trailing → arrow. Defaults to true for primary. */
  arrow?: boolean;
  children: React.ReactNode;
}
/** Mono chip for stacks, kinds and status. */
export interface TagProps {
  tone?: 'neutral' | 'signal' | 'current';
  /** Leading square dot. */
  dot?: boolean;
  /** Breathing dot for live status (implies dot). */
  live?: boolean;
  children: React.ReactNode;
}
export interface NavLink { label: string; href?: string; active?: boolean }
/** Top bar: typographic monogram, numbered links, status, CTA. */
export interface NavBarProps {
  name: string;
  initials?: string;
  homeHref?: string;
  links?: NavLink[];
  /** Live availability text, shown as a current Tag. */
  status?: string;
  cta?: { label: string; href?: string };
}
/** Five satellites around an agent core. Index order: top, right, bottom-right, bottom-left, left. */
export interface AgentGraphProps { nodes?: string[]; hot?: number[]; core?: string }
/** The opening stage: eyebrow, serif name with italic accent, statement, actions, AgentGraph. */
export interface HeroProps {
  eyebrow?: string;
  name: string;
  /** Second line, italic in signal-ink. */
  accent?: string;
  statement?: React.ReactNode;
  actions?: React.ReactNode;
  /** false hides the graph; an object configures it. */
  graph?: false | AgentGraphProps;
}
/** Numbered section opener with serif title and optional italic accent. */
export interface SectionHeaderProps {
  index?: string;
  label: string;
  title: string;
  accent?: string;
  lede?: React.ReactNode;
  aside?: React.ReactNode;
}
/** One measured fact, big serif number over a mono label. */
export interface MetricProps { value: React.ReactNode; unit?: string; label: string; note?: string }
/** Case-study teaser; the whole card is the link. */
export interface ProjectCardProps {
  index?: string;
  kind?: string;
  title: string;
  summary?: string;
  outcome?: React.ReactNode;
  tags?: string[];
  href?: string;
  featured?: boolean;
  visual?: React.ReactNode;
}
export type TraceKind = 'plan' | 'model' | 'tool' | 'mcp' | 'human' | 'result' | 'error';
export interface TraceStep { kind: TraceKind; label: string; detail?: string; ms?: number }
/** A recorded agent run, step by step — the signature evidence component. */
export interface AgentTraceProps {
  title?: string;
  meta?: string;
  steps: TraceStep[];
  /** Steps arrive in sequence with a blinking cursor. */
  live?: boolean;
  status?: 'complete' | 'failed';
}
export type TerminalLine = string | { cmd?: string; text?: string; tone?: 'ok' | 'warn' | 'error' };
/** A shell session as evidence. */
export interface TerminalProps { title?: string; shell?: string; lines: TerminalLine[]; cursor?: boolean }
export interface TimelineItem { period: string; role: string; org?: string; summary?: string; current?: boolean }
/** Experience rail. */
export interface TimelineProps { items: TimelineItem[] }
/** Saffron closing stage with a big serif invitation. */
export interface ContactBandProps {
  eyebrow?: string;
  title: string;
  accent?: string;
  lede?: string;
  email?: string;
  links?: { label: string; href?: string }[];
}

export declare const Button: React.FC<ButtonProps>;
export declare const Tag: React.FC<TagProps>;
export declare const NavBar: React.FC<NavBarProps>;
export declare const Hero: React.FC<HeroProps>;
export declare const AgentGraph: React.FC<AgentGraphProps>;
export declare const SectionHeader: React.FC<SectionHeaderProps>;
export declare const Metric: React.FC<MetricProps>;
export declare const ProjectCard: React.FC<ProjectCardProps>;
export declare const AgentTrace: React.FC<AgentTraceProps>;
export declare const Terminal: React.FC<TerminalProps>;
export declare const Timeline: React.FC<TimelineProps>;
export declare const ContactBand: React.FC<ContactBandProps>;

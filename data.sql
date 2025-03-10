--
-- PostgreSQL database dump
--

-- Dumped from database version 16.8 (Ubuntu 16.8-0ubuntu0.24.04.1)
-- Dumped by pg_dump version 16.8 (Ubuntu 16.8-0ubuntu0.24.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: prenoms; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.prenoms (
    id integer NOT NULL,
    prenom character varying(50) NOT NULL
);


ALTER TABLE public.prenoms OWNER TO postgres;

--
-- Name: prenoms_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.prenoms_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.prenoms_id_seq OWNER TO postgres;

--
-- Name: prenoms_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.prenoms_id_seq OWNED BY public.prenoms.id;


--
-- Name: prenoms id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.prenoms ALTER COLUMN id SET DEFAULT nextval('public.prenoms_id_seq'::regclass);


--
-- Data for Name: prenoms; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.prenoms (id, prenom) FROM stdin;
1	Alice
2	Mohamed
3	Sophie
4	Karim
5	Laura
6	anass
\.


--
-- Name: prenoms_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.prenoms_id_seq', 6, true);


--
-- Name: prenoms prenoms_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.prenoms
    ADD CONSTRAINT prenoms_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

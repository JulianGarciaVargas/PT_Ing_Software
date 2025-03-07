PGDMP                       }            PT_ingSoftware    14.12    16.3 :    5           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            6           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            7           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            8           1262    16395    PT_ingSoftware    DATABASE     �   CREATE DATABASE "PT_ingSoftware" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Spain.1252';
     DROP DATABASE "PT_ingSoftware";
                postgres    false                        2615    2200    public    SCHEMA     2   -- *not* creating schema, since initdb creates it
 2   -- *not* dropping schema, since initdb creates it
                postgres    false            9           0    0    SCHEMA public    ACL     Q   REVOKE USAGE ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO PUBLIC;
                   postgres    false    4            �            1259    16423    gestora    TABLE     x   CREATE TABLE public.gestora (
    id bigint NOT NULL,
    nombre character varying(255) NOT NULL,
    pais_id bigint
);
    DROP TABLE public.gestora;
       public         heap    postgres    false    4            �            1259    16422    gestora_id_seq    SEQUENCE     �   CREATE SEQUENCE public.gestora_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.gestora_id_seq;
       public          postgres    false    4    216            :           0    0    gestora_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.gestora_id_seq OWNED BY public.gestora.id;
          public          postgres    false    215            �            1259    16586    gestora_moneda    TABLE     f   CREATE TABLE public.gestora_moneda (
    gestora_id bigint NOT NULL,
    moneda_id bigint NOT NULL
);
 "   DROP TABLE public.gestora_moneda;
       public         heap    postgres    false    4            �            1259    16599    gestora_pais    TABLE     b   CREATE TABLE public.gestora_pais (
    gestora_id bigint NOT NULL,
    pais_id bigint NOT NULL
);
     DROP TABLE public.gestora_pais;
       public         heap    postgres    false    4            �            1259    16404    moneda    TABLE     �   CREATE TABLE public.moneda (
    id bigint NOT NULL,
    simbolo character varying(255) NOT NULL,
    valor_en_dolares numeric(38,2) NOT NULL,
    nombre character varying(255) NOT NULL
);
    DROP TABLE public.moneda;
       public         heap    postgres    false    4            �            1259    16403    moneda_id_seq    SEQUENCE     �   CREATE SEQUENCE public.moneda_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.moneda_id_seq;
       public          postgres    false    212    4            ;           0    0    moneda_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.moneda_id_seq OWNED BY public.moneda.id;
          public          postgres    false    211            �            1259    16397    pais    TABLE     a   CREATE TABLE public.pais (
    id bigint NOT NULL,
    nombre character varying(255) NOT NULL
);
    DROP TABLE public.pais;
       public         heap    postgres    false    4            �            1259    16612    pais_gestora    TABLE     d   CREATE TABLE public.pais_gestora (
    pais_id integer NOT NULL,
    gestora_id integer NOT NULL
);
     DROP TABLE public.pais_gestora;
       public         heap    postgres    false    4            �            1259    16396    pais_id_seq    SEQUENCE     �   CREATE SEQUENCE public.pais_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.pais_id_seq;
       public          postgres    false    210    4            <           0    0    pais_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.pais_id_seq OWNED BY public.pais.id;
          public          postgres    false    209            �            1259    16434    pais_moneda    TABLE     `   CREATE TABLE public.pais_moneda (
    pais_id bigint NOT NULL,
    moneda_id bigint NOT NULL
);
    DROP TABLE public.pais_moneda;
       public         heap    postgres    false    4            �            1259    16411    usuario    TABLE     x   CREATE TABLE public.usuario (
    id bigint NOT NULL,
    nombre character varying(255) NOT NULL,
    pais_id bigint
);
    DROP TABLE public.usuario;
       public         heap    postgres    false    4            �            1259    16410    usuario_id_seq    SEQUENCE     �   CREATE SEQUENCE public.usuario_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.usuario_id_seq;
       public          postgres    false    214    4            =           0    0    usuario_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.usuario_id_seq OWNED BY public.usuario.id;
          public          postgres    false    213            �            1259    16449    usuario_moneda    TABLE     f   CREATE TABLE public.usuario_moneda (
    usuario_id bigint NOT NULL,
    moneda_id bigint NOT NULL
);
 "   DROP TABLE public.usuario_moneda;
       public         heap    postgres    false    4            �           2604    16464 
   gestora id    DEFAULT     h   ALTER TABLE ONLY public.gestora ALTER COLUMN id SET DEFAULT nextval('public.gestora_id_seq'::regclass);
 9   ALTER TABLE public.gestora ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215    216            �           2604    16480 	   moneda id    DEFAULT     f   ALTER TABLE ONLY public.moneda ALTER COLUMN id SET DEFAULT nextval('public.moneda_id_seq'::regclass);
 8   ALTER TABLE public.moneda ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    212    211    212                       2604    16499    pais id    DEFAULT     b   ALTER TABLE ONLY public.pais ALTER COLUMN id SET DEFAULT nextval('public.pais_id_seq'::regclass);
 6   ALTER TABLE public.pais ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    209    210    210            �           2604    16543 
   usuario id    DEFAULT     h   ALTER TABLE ONLY public.usuario ALTER COLUMN id SET DEFAULT nextval('public.usuario_id_seq'::regclass);
 9   ALTER TABLE public.usuario ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    213    214            -          0    16423    gestora 
   TABLE DATA           6   COPY public.gestora (id, nombre, pais_id) FROM stdin;
    public          postgres    false    216   	A       0          0    16586    gestora_moneda 
   TABLE DATA           ?   COPY public.gestora_moneda (gestora_id, moneda_id) FROM stdin;
    public          postgres    false    219   YA       1          0    16599    gestora_pais 
   TABLE DATA           ;   COPY public.gestora_pais (gestora_id, pais_id) FROM stdin;
    public          postgres    false    220   zA       )          0    16404    moneda 
   TABLE DATA           G   COPY public.moneda (id, simbolo, valor_en_dolares, nombre) FROM stdin;
    public          postgres    false    212   �A       '          0    16397    pais 
   TABLE DATA           *   COPY public.pais (id, nombre) FROM stdin;
    public          postgres    false    210   �B       2          0    16612    pais_gestora 
   TABLE DATA           ;   COPY public.pais_gestora (pais_id, gestora_id) FROM stdin;
    public          postgres    false    221   C       .          0    16434    pais_moneda 
   TABLE DATA           9   COPY public.pais_moneda (pais_id, moneda_id) FROM stdin;
    public          postgres    false    217   AC       +          0    16411    usuario 
   TABLE DATA           6   COPY public.usuario (id, nombre, pais_id) FROM stdin;
    public          postgres    false    214   �C       /          0    16449    usuario_moneda 
   TABLE DATA           ?   COPY public.usuario_moneda (usuario_id, moneda_id) FROM stdin;
    public          postgres    false    218   aD       >           0    0    gestora_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.gestora_id_seq', 12, true);
          public          postgres    false    215            ?           0    0    moneda_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.moneda_id_seq', 22, true);
          public          postgres    false    211            @           0    0    pais_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.pais_id_seq', 12, true);
          public          postgres    false    209            A           0    0    usuario_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.usuario_id_seq', 20, true);
          public          postgres    false    213            �           2606    16466    gestora gestora_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.gestora
    ADD CONSTRAINT gestora_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.gestora DROP CONSTRAINT gestora_pkey;
       public            postgres    false    216            �           2606    16482    moneda moneda_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.moneda
    ADD CONSTRAINT moneda_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.moneda DROP CONSTRAINT moneda_pkey;
       public            postgres    false    212            �           2606    16533    pais_moneda pais_moneda_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public.pais_moneda
    ADD CONSTRAINT pais_moneda_pkey PRIMARY KEY (pais_id, moneda_id);
 F   ALTER TABLE ONLY public.pais_moneda DROP CONSTRAINT pais_moneda_pkey;
       public            postgres    false    217    217            �           2606    16501    pais pais_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.pais
    ADD CONSTRAINT pais_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.pais DROP CONSTRAINT pais_pkey;
       public            postgres    false    210            �           2606    16576 "   usuario_moneda usuario_moneda_pkey 
   CONSTRAINT     s   ALTER TABLE ONLY public.usuario_moneda
    ADD CONSTRAINT usuario_moneda_pkey PRIMARY KEY (usuario_id, moneda_id);
 L   ALTER TABLE ONLY public.usuario_moneda DROP CONSTRAINT usuario_moneda_pkey;
       public            postgres    false    218    218            �           2606    16545    usuario usuario_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.usuario DROP CONSTRAINT usuario_pkey;
       public            postgres    false    214            �           2606    16602 (   gestora_pais fk46kdb8lu3tc58jw1vgmidxmh8    FK CONSTRAINT     �   ALTER TABLE ONLY public.gestora_pais
    ADD CONSTRAINT fk46kdb8lu3tc58jw1vgmidxmh8 FOREIGN KEY (pais_id) REFERENCES public.pais(id);
 R   ALTER TABLE ONLY public.gestora_pais DROP CONSTRAINT fk46kdb8lu3tc58jw1vgmidxmh8;
       public          postgres    false    3204    220    210            �           2606    16607 (   gestora_pais fkh7h9yp4e5d7f37aotp1i0x7xj    FK CONSTRAINT     �   ALTER TABLE ONLY public.gestora_pais
    ADD CONSTRAINT fkh7h9yp4e5d7f37aotp1i0x7xj FOREIGN KEY (gestora_id) REFERENCES public.gestora(id);
 R   ALTER TABLE ONLY public.gestora_pais DROP CONSTRAINT fkh7h9yp4e5d7f37aotp1i0x7xj;
       public          postgres    false    220    3210    216            �           2606    16594 *   gestora_moneda fkrrcqxrt2l6giefns9c7d744xd    FK CONSTRAINT     �   ALTER TABLE ONLY public.gestora_moneda
    ADD CONSTRAINT fkrrcqxrt2l6giefns9c7d744xd FOREIGN KEY (gestora_id) REFERENCES public.gestora(id);
 T   ALTER TABLE ONLY public.gestora_moneda DROP CONSTRAINT fkrrcqxrt2l6giefns9c7d744xd;
       public          postgres    false    3210    216    219            �           2606    16589 *   gestora_moneda fks5w7t93h75qmoehnoaa5ragx2    FK CONSTRAINT     �   ALTER TABLE ONLY public.gestora_moneda
    ADD CONSTRAINT fks5w7t93h75qmoehnoaa5ragx2 FOREIGN KEY (moneda_id) REFERENCES public.moneda(id);
 T   ALTER TABLE ONLY public.gestora_moneda DROP CONSTRAINT fks5w7t93h75qmoehnoaa5ragx2;
       public          postgres    false    3206    212    219            �           2606    16512    gestora gestora_pais_id_fkey    FK CONSTRAINT     z   ALTER TABLE ONLY public.gestora
    ADD CONSTRAINT gestora_pais_id_fkey FOREIGN KEY (pais_id) REFERENCES public.pais(id);
 F   ALTER TABLE ONLY public.gestora DROP CONSTRAINT gestora_pais_id_fkey;
       public          postgres    false    210    216    3204            �           2606    16622 )   pais_gestora pais_gestora_gestora_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.pais_gestora
    ADD CONSTRAINT pais_gestora_gestora_id_fkey FOREIGN KEY (gestora_id) REFERENCES public.gestora(id);
 S   ALTER TABLE ONLY public.pais_gestora DROP CONSTRAINT pais_gestora_gestora_id_fkey;
       public          postgres    false    3210    216    221            �           2606    16617 &   pais_gestora pais_gestora_pais_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.pais_gestora
    ADD CONSTRAINT pais_gestora_pais_id_fkey FOREIGN KEY (pais_id) REFERENCES public.pais(id);
 P   ALTER TABLE ONLY public.pais_gestora DROP CONSTRAINT pais_gestora_pais_id_fkey;
       public          postgres    false    210    221    3204            �           2606    16534 &   pais_moneda pais_moneda_moneda_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.pais_moneda
    ADD CONSTRAINT pais_moneda_moneda_id_fkey FOREIGN KEY (moneda_id) REFERENCES public.moneda(id);
 P   ALTER TABLE ONLY public.pais_moneda DROP CONSTRAINT pais_moneda_moneda_id_fkey;
       public          postgres    false    217    3206    212            �           2606    16523 $   pais_moneda pais_moneda_pais_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.pais_moneda
    ADD CONSTRAINT pais_moneda_pais_id_fkey FOREIGN KEY (pais_id) REFERENCES public.pais(id);
 N   ALTER TABLE ONLY public.pais_moneda DROP CONSTRAINT pais_moneda_pais_id_fkey;
       public          postgres    false    3204    217    210            �           2606    16577 ,   usuario_moneda usuario_moneda_moneda_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.usuario_moneda
    ADD CONSTRAINT usuario_moneda_moneda_id_fkey FOREIGN KEY (moneda_id) REFERENCES public.moneda(id);
 V   ALTER TABLE ONLY public.usuario_moneda DROP CONSTRAINT usuario_moneda_moneda_id_fkey;
       public          postgres    false    212    218    3206            �           2606    16566 -   usuario_moneda usuario_moneda_usuario_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.usuario_moneda
    ADD CONSTRAINT usuario_moneda_usuario_id_fkey FOREIGN KEY (usuario_id) REFERENCES public.usuario(id);
 W   ALTER TABLE ONLY public.usuario_moneda DROP CONSTRAINT usuario_moneda_usuario_id_fkey;
       public          postgres    false    3208    218    214            �           2606    16555    usuario usuario_pais_id_fkey    FK CONSTRAINT     z   ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pais_id_fkey FOREIGN KEY (pais_id) REFERENCES public.pais(id);
 F   ALTER TABLE ONLY public.usuario DROP CONSTRAINT usuario_pais_id_fkey;
       public          postgres    false    210    214    3204            -   @   x�=˱�0��������&H�-���	'�_�;��(��YJ�K���*0�D�h�?>X      0      x�3�4����� d      1      x������ � �      )     x�U�An�0E�3��	�mJ�,����(@�E7���F����;��^�޼oY+!ft"� 3s�CE�q�-�AO��א�)�H0�j:+�3�w-�$��^����9T���2_�Y/X.�t��3�V#���U��[����,h�J9�z��"���[���V3���R7���}����D�M?���6>�6mK���}�^CW�T9�;gn_jD�Y��뽝�qָ+
��@���VR�T�ڒJLmfm���-B�]�ZI      '   R   x�3�t����M�L�2�t-.IL�/V��R\�@�����8}���L��24�t,JO�+���q:%g�p��qqq ��(      2   #   x����24�44�24�44�24�44����� 5��      .   �   x�%��1��q1�(s��鿎�8�aj�4V��z�4�fIC{��k�� '����`��ʮ��7x������0�ac��0�1�a�<�3��;|�7L�͜7�vR7uTWuVwuX�uZڔ8�N�S��@�PIT�H���U�?�2�      +   m   x�3��*M�SH-J��4�2�����Sp�O�4�24�tN,��/VpO,J>�6�Ӓ�Ђӧ4�X�#�(��¼�..CKN�Ģ�D��\�� ���̜�DNC#�=... N7 N      /   ,   x�Ʊ  ��o�Kم��@4��tw�c���w��.�{"�     
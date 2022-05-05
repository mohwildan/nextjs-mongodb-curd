import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from 'styled-components'

function Add() {
  const [nama, setName] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();
  const { id } = router.query;

  const getUserById = async () => {
    const res = await axios.get(`api/users/${id}`);
    setName(res.data.nama);
    setEmail(res.data.email);
  };

  useEffect(() => {
    getUserById();
  },[]);

  const editt = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`api/users/${id}`, {
        nama,
        email,
      });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Section>
      <Container>
        <FormAdd onSubmit={editt}>
          <InputForm
            type="text"
            placeholder="name"
            value={nama}
            onChange={(e) => setName(e.target.value)}
          />
          <InputForm
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="sumbit">Add</Button>
        </FormAdd>
      </Container>
    </Section>
  );
}

export default Add;


const Section = styled.div`
  padding-top: 9rem;
`;
const Container = styled.div`
  width: min(100%, 75rem);
  margin-inline: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 10rem);
`;

const FormAdd = styled.form`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  align-items: center;
`;

const InputForm = styled.input`
  width: 50%;
  padding: 1rem 0;
  margin: 1rem 0;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);

  &::placeholder {
    font-size: 1.2rem;
  }
  &:focus {
    outline: none;
  }
`;
const Button = styled.button`
  border: none;
  outline: none;
  background-color: greenyellow;
  padding: 0.5rem 2rem;
  font-size: 1rem;
  border-radius: 20px;
  font-weight: 700;
  color: #333;
  font-size: 1.2rem;
`;


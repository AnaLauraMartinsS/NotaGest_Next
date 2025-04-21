'use client';

import React, { useState } from 'react';
import AddFileModal from '../../components/AddFileModal/AddFileModal';
import { MdDeleteForever } from 'react-icons/md';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Logo from '@/../public/Logo.png';
import ArquivoNaoEncontrado from '@/../public/arquivo_nao_encontrado.jpg';

const UploadsPage = () => {
  const [files, setFiles] = useState<any[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const addFile = (fileData: { title: string; observation: string }) => {
    const newFileData = {
      ...fileData,
      date: new Date().toLocaleString(),
    };
    setFiles([...files, newFileData]);
    setModalOpen(false);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const deleteFile = (index: number) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
  };

  const router = useRouter();
  const goHome = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-900 shadow-md p-4 flex justify-between items-center">
        <Image src={Logo} alt="Logo da Empresa" width={200} height={100} />
        <button
          onClick={goHome}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Logoff
        </button>
      </header>

      {/* Título */}
      <h1 className="text-3xl text-center mt-6 font-semibold text-blue-900">Meus Arquivos</h1>

      {/* Modal */}
      {isModalOpen && <AddFileModal onAddFile={addFile} onClose={closeModal} />}

      {/* Tabela ou imagem de vazio */}
      {files.length === 0 ? (
        <div className="flex flex-col items-center mt-10">
          <Image
            src={ArquivoNaoEncontrado}
            alt="Nenhum arquivo encontrado"
            width={200}
            height={200}
            className="mb-4"
          />
          <p className="text-gray-500">Nenhum arquivo encontrado. Adicione um arquivo.</p>
        </div>
      ) : (
        <div className="mt-8 max-w-4xl mx-auto bg-white shadow-md rounded-lg p-4">
          <table className="w-full text-left border-collapse text-zinc-800">
            <thead>
              <tr className="bg-zinc-300 text-zinc-900">
                <th className="p-3 font-medium">Título</th>
                <th className="p-3 font-medium">Observação</th>
                <th className="p-3 font-medium">Data</th>
                <th className="p-3 font-medium">Ação</th>
              </tr>
            </thead>
            <tbody>
              {files.map((file, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? 'bg-zinc-100' : 'bg-zinc-200'}
                >
                  <td className="p-3">{file.title}</td>
                  <td className="p-3">{file.observation}</td>
                  <td className="p-3">{file.date}</td>
                  <td className="p-3">
                    <button
                      onClick={() => deleteFile(index)}
                      className="text-red-600 hover:text-red-800 transition text-2xl"
                    >
                      <MdDeleteForever />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Botão adicionar */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => setModalOpen(true)}
          className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Adicionar Arquivo
        </button>
      </div>
    </div>
  );
};

export default UploadsPage;
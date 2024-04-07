import { FieldValues } from "react-hook-form";

const URL = "https://bootcamp-api.codeit.kr";

interface FetchResponse {
  [key: string]: any;
}

const fetchToGetData = async (path: string): Promise<FetchResponse> => {
  const response = await fetch(path);
  const body = await response.json();
  return body;
};

export const getData = async (path: string): Promise<FetchResponse> => {
  const detailPath = `${URL}/api/sample/${path}`;
  return fetchToGetData(detailPath);
};

export const getFolderListData = async (): Promise<FetchResponse> => {
  const detailPath = `${URL}/api/users/4/folders`;
  return fetchToGetData(detailPath);
};

export const getFolderLinksData = async (
  folderId: number
): Promise<FetchResponse> => {
  const path = `${URL}/api/users/4/links`;
  const detailPath = folderId === 1 ? path : `${path}?folderId=${folderId}`;
  return fetchToGetData(detailPath);
};

export const postLogin = async (data: FieldValues) => {
  const detailPath = `${URL}/api/sign-in`;

  const response = await fetch(detailPath, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to log in");
  }

  return response.json();
};

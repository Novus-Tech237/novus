// use-create-document.ts
"use client";

import { toast } from "@/hooks/use-toast";
import { api } from "@/lib/hono-rpc";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";

// Define the expected response type from the API
type ResponseType = InferResponseType<typeof api.document.create.$post>;

// Define the expected request type (JSON body) for the API
type RequestType = InferRequestType<typeof api.document.create.$post>["json"];

const useCreateDocument = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      // Make the API request to create a document
      const response = await api.document.create.$post({ json });
      return await response.json();
    },
    onSuccess: (response) => {
      console.log("Document created successfully:", response);

      // Invalidate the "documents" query to refetch the list of documents
      queryClient.invalidateQueries({ queryKey: ["documents"] });
    },
    onError: () => {
      // Show an error toast if the mutation fails
      toast({
        title: "Error",
        description: "Failed to create document",
        variant: "destructive",
      });
    },
  });

  return mutation;
};

export default useCreateDocument;
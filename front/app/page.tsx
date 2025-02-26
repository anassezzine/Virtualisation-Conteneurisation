"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserCheck2, UserX2 } from "lucide-react";

export default function Home() {
  const [name, setName] = useState("");
  const [result, setResult] = useState<{ exists: boolean; name: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const checkName = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:5000/check-name", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });

      if (!response.ok) throw new Error("Erreur serveur");

      const data = await response.json();
      setResult({ exists: data.exists, name });
    } catch (error) {
      console.error("Erreur :", error);
      setResult({ exists: false, name });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Vérification de Prénom</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={checkName} className="space-y-6">
            <Input
              type="text"
              placeholder="Entrez votre prénom"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full"
              required
            />
            <Button type="submit" className="w-full" disabled={isLoading || !name.trim()}>
              {isLoading ? "Recherche..." : "Vérifier"}
            </Button>
          </form>

          {result && (
            <div className="mt-6">
              <div className={`p-4 rounded-lg flex items-center gap-3 ${
                result.exists 
                  ? "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300"
                  : "bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-300"
              }`}>
                {result.exists ? (
                  <>
                    <UserCheck2 className="h-5 w-5" />
                    <span>Bonjour {result.name}</span>
                  </>
                ) : (
                  <>
                    <UserX2 className="h-5 w-5" />
                    <span>Vous n'êtes pas dans la base de données</span>
                  </>
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

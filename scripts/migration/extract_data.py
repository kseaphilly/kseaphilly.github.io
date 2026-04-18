import pandas as pd
from docx import Document
import os

def extract_excel(file_path):
    print(f"--- Extracting from {file_path} ---")
    try:
        xls = pd.ExcelFile(file_path)
        for sheet_name in xls.sheet_names:
            print(f"\nSheet: {sheet_name}")
            df = pd.read_excel(xls, sheet_name=sheet_name)
            print(df.to_string())
    except Exception as e:
        print(f"Error extracting Excel: {e}")

def extract_word(file_path):
    print(f"\n--- Extracting from {file_path} ---")
    try:
        doc = Document(file_path)
        for para in doc.paragraphs:
            if para.text.strip():
                print(para.text)
    except Exception as e:
        print(f"Error extracting Word: {e}")

if __name__ == "__main__":
    extract_excel("KSEA Philly Chapter 2025.xlsx")
    extract_word("KSEA Philadelphia Bylaws.docx")
